const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig);

// Configuración de multer para el almacenamiento de imágenes
const uploadDir = path.join(__dirname, '../public/uploads/eventos');

// Asegurar que el directorio existe
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, `evento-${uniqueSuffix}${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Solo se permiten archivos de imagen'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB máximo
  }
});

const applyFilters = (query, filters) => {
  const { nombre, descripcion, fecha_desde, fecha_hasta, organizacion_id } = filters;

  if (nombre) {
    query = query.where('nombre', 'like', `%${nombre}%`);
  }
  if (descripcion) {
    query = query.where('descripcion', 'like', `%${descripcion}%`);
  }
  if (fecha_desde) {
    query = query.where('fecha_hora', '>=', fecha_desde);
  }
  if (fecha_hasta) {
    query = query.where('fecha_hora', '<=', fecha_hasta);
  }
  if (organizacion_id) {
    query = query.where('organizacion_id', organizacion_id);
  }

  return query;
};

router.get('/list', async (req, res) => {
  try {
    const eventos = await knex('eventos')
      .select('id', 'nombre', 'fecha_hora')
      .orderBy('fecha_hora', 'desc');

    res.status(200).json(eventos);
  } catch (err) {
    res.status(500).json({
      error: 'Error obteniendo la lista de eventos',
      details: err.message || err,
    });
  }
});

router.get('/', async (req, res) => {
  let { nombre, descripcion, fecha_desde, fecha_hasta, organizacion_id, page = 1, limit = 10 } = req.query;

  page = parseInt(page, 10);
  if (isNaN(page) || page < 1) {
    return res.status(400).json({ error: 'El parámetro "page" debe ser un número mayor o igual a 1.' });
  }

  limit = parseInt(limit, 10);
  if (isNaN(limit) || limit < 1) {
    limit = 10;
  }

  const offset = (page - 1) * limit;

  try {
    const filters = {
      nombre,
      descripcion,
      fecha_desde,
      fecha_hasta,
      organizacion_id: organizacion_id ? parseInt(organizacion_id) : null
    };

    let countQuery = knex('eventos').count('* as total');
    countQuery = applyFilters(countQuery, filters);
    const totalCount = await countQuery.first();
    const total = parseInt(totalCount.total, 10);
    const totalPages = total > 0 ? Math.ceil(total / limit) : 1;

    let dataQuery = knex('eventos')
      .select('eventos.*', 'organizacion.nombre as organizacion_nombre')
      .leftJoin('organizacion', 'eventos.organizacion_id', 'organizacion.id')
      .orderBy('eventos.id', 'desc');

    dataQuery = applyFilters(dataQuery, filters);
    dataQuery = dataQuery.limit(limit).offset(offset);

    const eventos = await dataQuery;

    // Convertir el campo imágenes de JSON string a objeto
    const eventosFormateados = eventos.map(evento => {
      if (typeof evento.imagenes === 'string') {
        try {
          const imagenLimpia = evento.imagenes.replace(/\\/g, '');
          evento.imagenes = JSON.parse(imagenLimpia);

          if (typeof evento.imagenes === 'string') {
            evento.imagenes = JSON.parse(evento.imagenes);
          }
        } catch (e) {
          console.error(`Error al parsear imagenes para evento ${evento.id}:`, e);
          console.error('Contenido del campo imagenes:', evento.imagenes);
          if (evento.imagenes && evento.imagenes.startsWith('[') && evento.imagenes.endsWith(']')) {
            try {
              const arrayStr = evento.imagenes.replace(/"/g, '"').replace(/'/g, '"');
              evento.imagenes = JSON.parse(arrayStr);
            } catch (innerError) {
              console.error('Segundo intento de parseo fallido:', innerError);
              evento.imagenes = [];
            }
          } else {
            evento.imagenes = [];
          }
        }
      } else if (!Array.isArray(evento.imagenes)) {
        evento.imagenes = [];
      }

      return evento;
    });

    res.json({
      eventos: eventosFormateados,
      pagination: {
        total,
        totalPages,
        currentPage: page,
        limit,
      },
    });
  } catch (err) {
    console.error('Error obteniendo los eventos:', err);
    res.status(500).json({
      error: 'Error obteniendo los eventos',
      details: err.message || err,
    });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const evento = await knex('eventos')
      .select('eventos.*', 'organizacion.nombre as organizacion_nombre')
      .leftJoin('organizacion', 'eventos.organizacion_id', 'organizacion.id')
      .where('eventos.id', id)
      .first();

    if (!evento) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }

    console.log(`Evento ID ${id} - tipo de imagenes: ${typeof evento.imagenes}`);
    console.log(`Evento ID ${id} - valor de imagenes: ${evento.imagenes}`);

    if (typeof evento.imagenes === 'string') {
      try {
        const imagenLimpia = evento.imagenes.replace(/\\/g, '');
        evento.imagenes = JSON.parse(imagenLimpia);

        if (typeof evento.imagenes === 'string') {
          evento.imagenes = JSON.parse(evento.imagenes);
        }
      } catch (e) {
        console.error(`Error al parsear imagenes para evento ID ${id}:`, e);
        console.error('Contenido del campo imagenes:', evento.imagenes);

        if (evento.imagenes && evento.imagenes.startsWith('[') && evento.imagenes.endsWith(']')) {
          try {
            const arrayStr = evento.imagenes.replace(/"/g, '"').replace(/'/g, '"');
            evento.imagenes = JSON.parse(arrayStr);
          } catch (innerError) {
            console.error('Segundo intento de parseo fallido:', innerError);
            evento.imagenes = [];
          }
        } else {
          evento.imagenes = [];
        }
      }
    } else if (!Array.isArray(evento.imagenes)) {
      evento.imagenes = [];
    }

    res.json(evento);
  } catch (err) {
    console.error(`Error obteniendo el evento ID ${id}:`, err);
    res.status(500).json({ error: 'Error obteniendo el evento', details: err.message || err });
  }
});

router.post('/', async (req, res) => {
  const { nombre, descripcion, latitud, longitud, fecha_hora, organizacion_id } = req.body;
  try {
    const result = await knex('eventos').insert({
      nombre,
      descripcion,
      latitud,
      longitud,
      fecha_hora,
      imagenes: '[]',
      organizacion_id
    });

    const newEvento = await knex('eventos').where('id', result[0]).first();

    res.status(201).json({ message: 'Evento creado con éxito', id: newEvento.id });
  } catch (err) {
    res.status(500).json({ error: 'Error creando el evento', details: err.message || err });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, latitud, longitud, fecha_hora, organizacion_id } = req.body;
  try {
    const eventoExistente = await knex('eventos').where('id', id).first();

    if (!eventoExistente) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }

    const updatedEvento = await knex('eventos')
      .where('id', id)
      .update({
        nombre,
        descripcion,
        latitud,
        longitud,
        fecha_hora,
        organizacion_id
      });

    res.json({ message: 'Evento actualizado con éxito' });
  } catch (err) {
    res.status(500).json({ error: 'Error actualizando el evento', details: err.message || err });
  }
});

// Ruta para subir imágenes a un evento
router.post('/:id/imagenes', upload.array('imagenes', 10), async (req, res) => {
  const { id } = req.params;

  try {
    console.log('Archivos recibidos:', req.files ? req.files.length : 'ninguno');
    if (req.files) {
      req.files.forEach((file, index) => {
        console.log(`Archivo ${index + 1}:`, file.originalname, file.path);
      });
    }

    const evento = await knex('eventos').where('id', id).first();
    if (!evento) {
      if (req.files && req.files.length > 0) {
        req.files.forEach(file => {
          fs.unlinkSync(file.path);
        });
      }
      return res.status(404).json({ error: 'Evento no encontrado' });
    }

    let imagenes = [];
    try {
      if (evento.imagenes) {
        if (typeof evento.imagenes === 'string') {
          imagenes = JSON.parse(evento.imagenes);
        }
        else if (Array.isArray(evento.imagenes)) {
          imagenes = evento.imagenes;
        }
      }
    } catch (e) {
      console.error('Error al parsear imágenes existentes:', e);
      imagenes = [];
    }

    console.log('Imágenes actuales:', imagenes);

    if (req.files && req.files.length > 0) {
      const nuevasImagenes = req.files.map(file => {
        return `/uploads/eventos/${path.basename(file.path)}`;
      });

      console.log('Nuevas imágenes a añadir:', nuevasImagenes);

      imagenes = [...imagenes, ...nuevasImagenes];

      await knex('eventos')
        .where('id', id)
        .update({ imagenes: JSON.stringify(imagenes) });

      console.log('Imágenes guardadas en DB:', JSON.stringify(imagenes));
    }

    // Obtenemos el evento actualizado y aseguramos que las imágenes se retornen correctamente
    const eventoActualizado = await knex('eventos').where('id', id).first();
    let imagenesActualizadas = [];
    
    try {
      if (eventoActualizado.imagenes) {
        if (typeof eventoActualizado.imagenes === 'string') {
          const imagenLimpia = eventoActualizado.imagenes.replace(/\\/g, '');
          imagenesActualizadas = JSON.parse(imagenLimpia);
          
          // Si sigue siendo string después del parseo
          if (typeof imagenesActualizadas === 'string') {
            imagenesActualizadas = JSON.parse(imagenesActualizadas);
          }
        } else if (Array.isArray(eventoActualizado.imagenes)) {
          imagenesActualizadas = eventoActualizado.imagenes;
        }
      }
    } catch (e) {
      console.error('Error al parsear imágenes actualizadas:', e);
      console.error('Valor recibido:', eventoActualizado.imagenes);
      imagenesActualizadas = [];
    }

    console.log('Imágenes actualizadas para respuesta:', imagenesActualizadas);

    res.json({
      message: 'Imágenes subidas con éxito',
      imagenes: imagenesActualizadas
    });
  } catch (err) {
    console.error('Error en la subida de imágenes:', err);
    if (req.files && req.files.length > 0) {
      req.files.forEach(file => {
        if (fs.existsSync(file.path)) {
          fs.unlinkSync(file.path);
        }
      });
    }
    res.status(500).json({ error: 'Error subiendo imágenes', details: err.message || err });
  }
});

// Ruta para eliminar imágenes de un evento
router.delete('/:id/imagenes', async (req, res) => {
  const { id } = req.params;
  const { imagenes } = req.body;

  console.log('Solicitud para eliminar imágenes:', imagenes);

  if (!imagenes || !Array.isArray(imagenes) || imagenes.length === 0) {
    return res.status(400).json({ error: 'Debe proporcionar un array de rutas de imágenes a eliminar' });
  }

  try {
    const evento = await knex('eventos').where('id', id).first();
    if (!evento) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }

    let imagenesActuales = [];
    try {
      if (typeof evento.imagenes === 'string') {
        imagenesActuales = JSON.parse(evento.imagenes);
      } else if (Array.isArray(evento.imagenes)) {
        imagenesActuales = evento.imagenes;
      }
    } catch (e) {
      console.error('Error al parsear imágenes existentes para eliminar:', e);
      imagenesActuales = [];
    }

    console.log('Imágenes actuales antes de eliminar:', imagenesActuales);
    
    // Corregimos la lógica de filtrado para identificar las imágenes a eliminar
    const rutasAEliminar = imagenes;
    const imagenesAEliminar = [];
    const imagenesRestantes = [];

    // Verificar cada imagen actual si debe ser eliminada o conservada
    imagenesActuales.forEach(ruta => {
      // Comprobar si la ruta actual está en la lista de rutas a eliminar
      if (rutasAEliminar.includes(ruta)) {
        imagenesAEliminar.push(ruta);
      } else {
        imagenesRestantes.push(ruta);
      }
    });

    console.log('Imágenes a eliminar:', imagenesAEliminar);
    console.log('Imágenes restantes:', imagenesRestantes);

    // Eliminar archivos físicos
    imagenesAEliminar.forEach(ruta => {
      // Eliminar slash inicial si existe para la construcción de la ruta
      const rutaSinSlash = ruta.startsWith('/') ? ruta.substring(1) : ruta;
      const rutaCompleta = path.join(__dirname, '..', 'public', rutaSinSlash);
      console.log('Intentando eliminar archivo:', rutaCompleta);
      if (fs.existsSync(rutaCompleta)) {
        fs.unlinkSync(rutaCompleta);
        console.log('Archivo eliminado:', rutaCompleta);
      } else {
        console.log('Archivo no encontrado:', rutaCompleta);
      }
    });

    // Actualizar la lista de imágenes en la base de datos
    await knex('eventos')
      .where('id', id)
      .update({ imagenes: JSON.stringify(imagenesRestantes) });

    res.json({
      message: 'Imágenes eliminadas con éxito',
      imagenes: imagenesRestantes
    });
  } catch (err) {
    console.error('Error eliminando imágenes:', err);
    res.status(500).json({ error: 'Error eliminando imágenes', details: err.message || err });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const evento = await knex('eventos').where('id', id).first();
    if (!evento) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }

    try {
      const imagenes = evento.imagenes ? JSON.parse(evento.imagenes) : [];
      imagenes.forEach(ruta => {
        const rutaCompleta = path.join(__dirname, '..', 'public', ruta);
        if (fs.existsSync(rutaCompleta)) {
          fs.unlinkSync(rutaCompleta);
        }
      });
    } catch (e) {
      console.error('Error eliminando archivos de imágenes:', e);
    }

    const deletedEvento = await knex('eventos').where('id', id).del();
    res.json({ message: 'Evento eliminado' });
  } catch (err) {
    res.status(500).json({ error: 'Error eliminando el evento', details: err.message || err });
  }
});

module.exports = router;