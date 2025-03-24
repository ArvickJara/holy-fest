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
  // Aceptar solo imágenes
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
      try {
        evento.imagenes = evento.imagenes ? JSON.parse(evento.imagenes) : [];
      } catch (e) {
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

    // Convertir el campo imágenes de JSON string a objeto
    try {
      evento.imagenes = evento.imagenes ? JSON.parse(evento.imagenes) : [];
    } catch (e) {
      evento.imagenes = [];
    }

    res.json(evento);
  } catch (err) {
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
      imagenes: '[]',  // Inicialmente un array vacío
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
    // Verificar que el evento existe
    const evento = await knex('eventos').where('id', id).first();
    if (!evento) {
      // Eliminar archivos subidos si el evento no existe
      if (req.files && req.files.length > 0) {
        req.files.forEach(file => {
          fs.unlinkSync(file.path);
        });
      }
      return res.status(404).json({ error: 'Evento no encontrado' });
    }

    // Obtener imágenes actuales
    let imagenes = [];
    try {
      imagenes = evento.imagenes ? JSON.parse(evento.imagenes) : [];
    } catch (e) {
      imagenes = [];
    }

    // Añadir nuevas imágenes
    if (req.files && req.files.length > 0) {
      const nuevasImagenes = req.files.map(file => {
        const rutaRelativa = `uploads/eventos/${path.basename(file.path)}`;
        return rutaRelativa;
      });
      
      imagenes = [...imagenes, ...nuevasImagenes];
      
      // Actualizar el evento con las nuevas imágenes
      await knex('eventos')
        .where('id', id)
        .update({ imagenes: JSON.stringify(imagenes) });
    }

    res.json({ 
      message: 'Imágenes subidas con éxito', 
      imagenes 
    });
  } catch (err) {
    // En caso de error, eliminar archivos subidos
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
  const { imagenes } = req.body; // Array de rutas a eliminar
  
  if (!imagenes || !Array.isArray(imagenes) || imagenes.length === 0) {
    return res.status(400).json({ error: 'Debe proporcionar un array de rutas de imágenes a eliminar' });
  }

  try {
    // Verificar que el evento existe
    const evento = await knex('eventos').where('id', id).first();
    if (!evento) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }

    // Obtener imágenes actuales
    let imagenesActuales = [];
    try {
      imagenesActuales = evento.imagenes ? JSON.parse(evento.imagenes) : [];
    } catch (e) {
      imagenesActuales = [];
    }

    // Filtrar imágenes que se van a eliminar
    const imagenesAEliminar = imagenesActuales.filter(ruta => imagenes.includes(ruta));
    const imagenesRestantes = imagenesActuales.filter(ruta => !imagenes.includes(ruta));

    // Eliminar archivos físicos
    imagenesAEliminar.forEach(ruta => {
      const rutaCompleta = path.join(__dirname, '..', 'public', ruta);
      if (fs.existsSync(rutaCompleta)) {
        fs.unlinkSync(rutaCompleta);
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
    res.status(500).json({ error: 'Error eliminando imágenes', details: err.message || err });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // Obtener el evento para conocer sus imágenes
    const evento = await knex('eventos').where('id', id).first();
    if (!evento) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }

    // Eliminar archivos físicos asociados
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

    // Eliminar el evento de la base de datos
    const deletedEvento = await knex('eventos').where('id', id).del();
    res.json({ message: 'Evento eliminado' });
  } catch (err) {
    res.status(500).json({ error: 'Error eliminando el evento', details: err.message || err });
  }
});

module.exports = router;