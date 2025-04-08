exports.seed = async function (knex) {
  await knex('eventos').del();

  await knex('eventos').insert([
    {
      nombre: 'Lanzamiento de las actividades de Semana Santa en la Región Huánuco - 2025 Escenificación del Domingo deRAmos a cargo de la Municipalidad distrital de Tomaykichwa',
      latitud: -9.932432105802631,
      longitud: -76.23600584597301,
      fecha_hora: '2025-03-25 11:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Lanzamiento de las actividades por semana santa de la Municipalidad Distrital de Churubamba en Lima',
      latitud: -12.054794605434946, 
      longitud: -77.0420388186855,
      fecha_hora: '2025-03-26 10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Lanzamiento de las actividades de Semana Santa en la Región Huánuco - 2025',
      latitud: -12.096578057111737,
      longitud: -77.0159138274281,
      fecha_hora: '2025-04-04 10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/amarilis-1.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Visita y promoción a la escenificación de Domingo de Ramos en Conchamarca',
      latitud: -10.036239671864532,
      longitud: -76.21654232270242,
      fecha_hora: '2025-04-13 08:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Se inicia con el Domingo, de Ramos desde la iglesia Santa Cruz hacia las calles principales de Churubamba',
      latitud: -9.825849949494792, 
      longitud: -76.13340753586174,
      fecha_hora: '2025-04-13 08:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: '* Solemne procesión del Señor del Triunfo de la Parroquia San Sebastián hacia la Catedral-Huánuco.',
      latitud: -9.936195635754737, 
      longitud: -76.24485809136253,
      fecha_hora: '2025-04-13 08:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },


    {
      nombre: 'Misa, procesión y compartir de Challwa (humitas con cachuelos y café) en la capilla de Pacapucro',
      latitud: -9.840401334604804, 
      longitud: -76.14036349854723,
      fecha_hora: '2025-04-14 07:00:00',
      imagenes: JSON.stringify(['uploads/eventos/concierto-1.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Caravana Pesquera Consumamos Pescado" organizado por el Gobierno regional de Huánuco',
      latitud: -9.920996241825447, 
      longitud: -76.24143842834785,
      fecha_hora: '2025-04-14 09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Caravana Pesquera Consumamos Pescado" organizado por el Gobierno regional de Huánuco',
      latitud: -9.920996241825447, 
      longitud: -76.24143842834785,
      fecha_hora: '2025-04-15 09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa, procesión de Cristo y la Virgen Dolorosa en Cascay, y compartir del locro de cushuro y queso',
      latitud: -9.839504663198344, 
      longitud: -76.14694556608741 ,
      fecha_hora: '2025-04-15 18:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Caravana Pesquera Consumamos Pescado" organizado por el Gobierno regional de Huánuco',
      latitud: -9.920996241825447, 
      longitud: -76.24143842834785,
      fecha_hora: '2025-04-16 09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'misa y procesión de Jesús de Nazareno',
      latitud: -12.096578057111737,
      longitud: -77.0159138274281,
      fecha_hora: '2025-04-16 19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Santa Misa en honor al Señor del Huerto',
      latitud: -9.936142770832813, 
      longitud: -76.24475082302962,
      fecha_hora: '2025-04-16 19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Caravana Pesquera Consumamos Pescado" organizado por el Gobierno regional de Huánuco',
      latitud: -9.920996241825447, 
      longitud: -76.24143842834785,
      fecha_hora: '2025-04-17 09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Feria turística y artesanal por Semana Santa',
      latitud: -9.932515995698928, 
      longitud: -76.2362022362766,
      fecha_hora: '2025-04-17 10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Activación y recepción a los turistas en las agencias de viaje y aeropuerto de Huánuco',
      latitud: -9.878106755128526, 
      longitud: -76.20629859035424,
      fecha_hora: '2025-04-17 08:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Degustación de dulces tradicionales del barrio Iskuchaka - San Sebastián',
      latitud: -9.93612166038685, 
      longitud: -76.24477225967432,
      fecha_hora: '2025-04-17 17:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Visita a las 7 iglesias de Huánuco',
      latitud: -9.932408161581858, 
      longitud: -76.23619984802313,
      fecha_hora: '2025-04-17 17:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Inauguración de la Feria turística y artesanal por Semana Santa',
      latitud: -9.92053916717793, 
      longitud: -76.24159375174985,
      fecha_hora: '2025-04-17 19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    
    
    {
      nombre: 'Feria turística y artesanal por Semana Santa',
      latitud: -9.932515995698928, 
      longitud: -76.2362022362766,
      fecha_hora: '2025-04-18 10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Feria turística y artesanal por Semana Santa',
      latitud: -9.932515995698928, 
      longitud: -76.2362022362766,
      fecha_hora: '2025-04-19 10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Feria turística y artesanal por Semana Santa',
      latitud: -9.932515995698928, 
      longitud: -76.2362022362766,
      fecha_hora: '2025-04-20 10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Visita y promoción a la escenificación del viacrucis en la Ermita Las Pampas',
      latitud: -10.048924980626703, 
      longitud: -76.21848156984973,
      fecha_hora: '2025-04-18 08:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Escenificación de la vida, pasión y muerte de Jesús, haciendo el recorrido por las calles principales y finalizando con la crucifición en el cerro Yucan',
      latitud: -9.83518428036736, 
      longitud: -76.0963472312744 ,
      fecha_hora: '2025-04-18 12:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Vía Crusis en la nueva Capilla "Niño Jesús Héroes del Cenepa" - Pichipampa',
      latitud: -9.924375126288405,  
      longitud: -76.23297952491245,
      fecha_hora: '2025-04-18 10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'La procesión del Cristo de la Agonía en Huánuco',
      latitud: -9.928624499754905, 
      longitud: -76.239191454142  ,
      fecha_hora: '2025-04-18 08:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Visita la Ruta Turística de Huánuco y Tingo Maria',
      latitud: -9.920031882897236,  
      longitud: -76.24056378360144,
      fecha_hora: '2025-04-19 00:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Visita la Ruta Turística de Huánuco y Tingo Maria',
      latitud: -9.920031882897236,  
      longitud: -76.24056378360144,
      fecha_hora: '2025-04-20 00:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },

  ]);
};