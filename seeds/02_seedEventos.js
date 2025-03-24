exports.seed = async function(knex) {
  await knex('eventos').del();
  
  await knex('eventos').insert([
    {
      nombre: 'Festival Holi Municipal 2025',
      descripcion: 'Gran celebración anual organizada por la Municipalidad de Amarilis. Evento familiar con música en vivo, comida típica y la tradicional explosión de colores.',
      latitud: -9.9478,
      longitud: -76.2453,
      fecha_hora: '2025-05-20 14:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Amarilis en Colores',
      descripcion: 'Desfile y celebración por el aniversario de Amarilis. Recorrido por las principales calles del distrito con actividades para toda la familia.',
      latitud: -9.9492,
      longitud: -76.2472,
      fecha_hora: '2025-08-15 10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/amarilis-1.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    
    {
      nombre: 'Festival Cultural Holi',
      descripcion: 'Evento que fusiona la celebración Holi con manifestaciones culturales locales. Incluye exposiciones artísticas, danzas tradicionales y la experiencia Holi.',
      latitud: -9.9461,
      longitud: -76.2489,
      fecha_hora: '2025-04-18 11:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Concierto Holi Art',
      descripcion: 'Espectáculo musical y artístico con bandas locales y exposición de obras de arte inspiradas en los colores Holi.',
      latitud: -9.9505,
      longitud: -76.2437,
      fecha_hora: '2025-07-05 18:00:00',
      imagenes: JSON.stringify(['uploads/eventos/concierto-1.jpg']),
      organizacion_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    
    {
      nombre: 'Holi Fest Universitario',
      descripcion: 'La fiesta Holi más grande para jóvenes universitarios. DJ en vivo, concursos y mucha diversión con colores.',
      latitud: -9.9449,
      longitud: -76.2419,
      fecha_hora: '2025-06-12 16:00:00',
      imagenes: JSON.stringify(['uploads/eventos/uni-1.jpg', 'uploads/eventos/uni-2.jpg']),
      organizacion_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Color Run Juvenil',
      descripcion: 'Carrera recreativa de 3km donde los participantes serán rociados con colores en diferentes puntos del recorrido. Finaliza con una gran celebración Holi.',
      latitud: -9.9481,
      longitud: -76.2411,
      fecha_hora: '2025-09-25 08:30:00',
      imagenes: JSON.stringify(['uploads/eventos/run-1.jpg', 'uploads/eventos/run-2.jpg']),
      organizacion_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);
};