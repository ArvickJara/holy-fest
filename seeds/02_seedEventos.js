exports.seed = async function (knex) {
  await knex('eventos').del();

  await knex('eventos').insert([
    {
      nombre: 'Lanzamiento de las actividades de Semana Santa en la Región Huánuco - 2025 Escenificación del Domingo deRAmos a cargo de la Municipalidad distrital de Tomaykichwa',
      latitud: -9.932432105802631,
      longitud: -76.23600584597301,
      fecha: '2025-03-25',
      hora: '11:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Lanzamiento de las actividades por semana santa de la Municipalidad Distrital de Churubamba en Lima',
      latitud: -12.054794605434946,
      longitud: -77.0420388186855,
      fecha: '2025-04-26',
      hora: '10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Lanzamiento de las actividades de Semana Santa en la Región Huánuco - 2025',
      latitud: -12.096578057111737,
      longitud: -77.0159138274281,
      fecha: '2025-04-04',
      hora: '10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/amarilis-1.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Visita y promoción a la escenificación de Domingo de Ramos en Conchamarca',
      latitud: -10.036239671864532,
      longitud: -76.21654232270242,
      fecha: '2025-04-13',
      hora: '08:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Se inicia con el Domingo, de Ramos desde la iglesia Santa Cruz hacia las calles principales de Churubamba',
      latitud: -9.825849949494792,
      longitud: -76.13340753586174,
      fecha: '2025-04-13',
      hora: '08:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Solemne procesión del Señor del Triunfo de la Parroquia San Sebastián hacia la Catedral-Huánuco.',
      latitud: -9.936195635754737,
      longitud: -76.24485809136253,
      fecha: '2025-04-13',
      hora: '08:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },


    {
      nombre: 'Misa, procesión y compartir de Challwa (humitas con cachuelos y café) en la capilla de Pacapucro',
      latitud: -9.840401334604804,
      longitud: -76.14036349854723,
      fecha: '2025-04-14',
      hora: '07:00:00',
      imagenes: JSON.stringify(['uploads/eventos/concierto-1.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Caravana Pesquera Consumamos Pescado" organizado por el Gobierno regional de Huánuco',
      latitud: -9.920996241825447,
      longitud: -76.24143842834785,
      fecha: '2025-04-07',
      hora: '09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Caravana Pesquera Consumamos Pescado" organizado por el Gobierno regional de Huánuco',
      latitud: -9.920996241825447,
      longitud: -76.24143842834785,
      fecha: '2025-04-15',
      hora: '09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa, procesión de Cristo y la Virgen Dolorosa en Cascay, y compartir del locro de cushuro y queso',
      latitud: -9.839504663198344,
      longitud: -76.14694556608741,
      fecha: '2025-04-15',
      hora: '18:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Caravana Pesquera Consumamos Pescado" organizado por el Gobierno regional de Huánuco',
      latitud: -9.920996241825447,
      longitud: -76.24143842834785,
      fecha: '2025-04-16',
      hora: '09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa y procesión de Jesús de Nazareno',
      latitud: -12.096578057111737,
      longitud: -77.0159138274281,
      fecha: '2025-04-16',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Santa Misa en honor al Señor del Huerto',
      latitud: -9.936142770832813,
      longitud: -76.24475082302962,
      fecha: '2025-04-16',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Caravana Pesquera Consumamos Pescado" organizado por el Gobierno regional de Huánuco',
      latitud: -9.920996241825447,
      longitud: -76.24143842834785,
      fecha: '2025-04-17',
      hora: '09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Feria turística y artesanal por Semana Santa',
      latitud: -9.932515995698928,
      longitud: -76.2362022362766,
      fecha: '2025-04-17',
      hora: '10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Activación y recepción a los turistas en las agencias de viaje y aeropuerto de Huánuco',
      latitud: -9.878106755128526,
      longitud: -76.20629859035424,
      fecha: '2025-04-17',
      hora: '08:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Degustación de dulces tradicionales del barrio Iskuchaka - San Sebastián',
      latitud: -9.93612166038685,
      longitud: -76.24477225967432,
      fecha: '2025-04-17',
      hora: '17:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Visita a las 7 iglesias de Huánuco',
      latitud: -9.932408161581858,
      longitud: -76.23619984802313,
      fecha: '2025-04-17',
      hora: '17:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Inauguración de la Feria turística y artesanal por Semana Santa',
      latitud: -9.92053916717793,
      longitud: -76.24159375174985,
      fecha: '2025-04-17',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },


    {
      nombre: 'Feria turística y artesanal por Semana Santa',
      latitud: -9.932515995698928,
      longitud: -76.2362022362766,
      fecha: '2025-04-18',
      hora: '10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Feria turística y artesanal por Semana Santa',
      latitud: -9.932515995698928,
      longitud: -76.2362022362766,
      fecha: '2025-04-19',
      hora: '10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Feria turística y artesanal por Semana Santa',
      latitud: -9.932515995698928,
      longitud: -76.2362022362766,
      fecha: '2025-04-20',
      hora: '10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Visita y promoción a la escenificación del viacrucis en la Ermita Las Pampas',
      latitud: -10.048924980626703,
      longitud: -76.21848156984973,
      fecha: '2025-04-18',
      hora: '08:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Escenificación de la vida, pasión y muerte de Jesús, haciendo el recorrido por las calles principales y finalizando con la crucifición en el cerro Yucan',
      latitud: -9.83518428036736,
      longitud: -76.0963472312744,
      fecha: '2025-04-18',
      hora: '12:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Vía Crusis en la nueva Capilla "Niño Jesús Héroes del Cenepa" - Pichipampa',
      latitud: -9.924375126288405,
      longitud: -76.23297952491245,
      fecha: '2025-04-18',
      hora: '10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'La procesión del Cristo de la Agonía en Huánuco',
      latitud: -9.928624499754905,
      longitud: -76.239191454142,
      fecha: '2025-04-18',
      hora: '08:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Visita la Ruta Turística de Huánuco y Tingo Maria',
      latitud: -9.920031882897236,
      longitud: -76.24056378360144,
      fecha: '2025-04-19',
      hora: '00:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Visita la Ruta Turística de Huánuco y Tingo Maria',
      latitud: -9.920031882897236,
      longitud: -76.24056378360144,
      fecha: '2025-04-20',
      hora: '00:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    },


    {
      nombre: 'Santa Misa en honor a la Virgen de los Dolores',
      latitud: -9.936142796208651,
      longitud: -76.2448795480231,
      fecha: '2025-04-11',
      hora: '07:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Vía Crucis por el perímetro de la parroquia',
      latitud: -9.936142796208651,
      longitud: -76.2448795480231,
      fecha: '2025-04-11',
      hora: '08:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Bendición de las palmas y Celebración Eucarística',
      latitud: -9.936142796208651,
      longitud: -76.2448795480231,
      fecha: '2025-04-13',
      hora: '07:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Solemne procesión del Señor del Triunfo de la Parroquia San Sebastián hacia la Catedral',
      latitud: -9.936142796208651,
      longitud: -76.2448795480231,
      fecha: '2025-04-13',
      hora: '15:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Celebración Eucarística y confesiones',
      latitud: -9.936142796208651,
      longitud: -76.2448795480231,
      fecha: '2025-04-14',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Misa Crismal en la Catedral (Clero Diocesano y Religioso) Atención zona rural Capellanía de Chinchavito',
      latitud: -9.92856109082845,
      longitud: -76.239459675014,
      fecha: '2025-04-15',
      hora: '10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Santa Misa en honor al Señor del Huerto y confesiones',
      latitud: -9.936142796208651,
      longitud: -76.2448795480231,
      fecha: '2025-04-16',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Degustación de dulces tradicionales del barrio Iskuchaka - San Sebastián. (Lugar: Atrio de la parroquia)',
      latitud: -9.936142796208651,
      longitud: -76.2448795480231,
      fecha: '2025-04-17',
      hora: '16:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Celebración de la Institución Eucarística y lavado de pies de los Apóstoles',
      latitud: -9.936142796208651,
      longitud: -76.2448795480231,
      fecha: '2025-04-17',
      hora: '18:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Adoración al Santísimo Sacramento con participación de toda la feligresía y grupos eclesiales de la parroquia',
      latitud: -9.936142796208651,
      longitud: -76.2448795480231,
      fecha: '2025-04-17',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Vía crucis en la nueva Capilla "Niño Jesús Héroes del Cenepa" Pichiwpampa',
      latitud: -9.936142796208651,
      longitud: -76.2448795480231,
      fecha: '2025-04-18',
      hora: '10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Celebración de la Pasión del Señor y veneración de la Santísima Cruz en la Parroquia San Sebastián',
      latitud: -9.936142796208651,
      longitud: -76.2448795480231,
      fecha: '2025-04-18',
      hora: '17:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Vigilia Pascual, bendición del fuego y del agua, Misa solemne de Pascua de Resurrección',
      latitud: -9.936142796208651,
      longitud: -76.2448795480231,
      fecha: '2025-04-19',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Domingo, pascua de resurrección',
      latitud: -9.936142796208651,
      longitud: -76.2448795480231,
      fecha: '2025-04-20',
      hora: '07:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Domingo, pascua de resurrección',
      latitud: -9.936142796208651,
      longitud: -76.2448795480231,
      fecha: '2025-04-20',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Escenificación de la vida, pasión y muerte de nuestro señor Jesucristo',
      latitud: -9.82625824152159,
      longitud: -76.80141855764403,
      fecha: '2025-04-18',
      hora: '09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Bendiciones de Palmas y Santa Misa',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-13',
      hora: '07:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Bendiciones de Palmas y Santa Misa',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-13',
      hora: '10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Bendiciones de Palmas y Santa Misa',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-13',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    //Miércoles Santo | 16 de abril

    {
      nombre: 'Confesiones',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-16',
      hora: '16:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Confesiones',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-16',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    //Jueves Santo | 17 de abril

    {
      nombre: 'Misa',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-17',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Adoración Eucarística',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-17',
      hora: '20:30:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Adoración Eucarística',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-17',
      hora: '23:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    //Viernes Santo | 18 de abril

    {
      nombre: 'Viacrucis Parroquial',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-18',
      hora: '08:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Veneración de la Cruz - Liturgia de la Pasión',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-18',
      hora: '18:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    //Sábado Santo | 19 de abril

    {
      nombre: 'Misa de Pascua',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-19',
      hora: '20:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    //Domingo de Resurrección | 20 de abril

    {
      nombre: 'Misa',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-20',
      hora: '07:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Misa',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-20',
      hora: '10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Misa',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-20',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },



    // PROGRAMA DE SENANA SANTA COMUNIDADES
    // PARROQUIA SAN PEDRO 2025

    //Domingo de Ramos | 13 de abril Bendiciones de Palmas y Eucaristía

    {
      nombre: 'San Martin de Porres',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-13',
      hora: '07:30:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'San Daniel Comboni',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-13',
      hora: '09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Exaltación de la cruz Loma Blanca, inicia con la bendición de palmas y procesión, culmina en Santa Rosa con la Santa Misa.',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-13',
      hora: '17:30:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    //Miércoles Santo | 16 de abril

    {
      nombre: 'Confesiones',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-16',
      hora: '16:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    //Jueves Santo | 17 de abril, Misa y Adoración Eucarística

    {
      nombre: 'Cruz Verde',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-17',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'San Martin de Porres',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-17',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'San Daniel Comboni',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-17',
      hora: '20:30:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    //Viernes Santo | 18 de abril - Sede Central

    {
      nombre: 'Viacrucis Parroquial',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-18',
      hora: '08:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Veneración de la Cruz - Liturgia de la pasión',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-18',
      hora: '18:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    // Sábado Santo 19 de abril | Celebración Pascual del Señor

    {
      nombre: 'San Martín de Porres',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-19',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'San Daniel Comboni',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-19',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    //Domingo Pascua de Resurrección | 20 de abril

    {
      nombre: 'San Martin de Porres',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-20',
      hora: '07:30:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'San Daniel Comboni',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-20',
      hora: '09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Cruz Verde',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-20',
      hora: '17:30:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    {
      nombre: 'Exaltación de la Cruz Loma Blanca',
      latitud: -9.931295369201662,
      longitud: -76.24686720542667,
      fecha: '2025-04-20',
      hora: '18:30:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 4,
      created_at: new Date(),
      updated_at: new Date()
    },

    /* ----------------------- */
    {
      nombre: 'Liturgia y bendición de Ramos en el Atrio',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-13',
      hora: '07:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Bendición de Ramos',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-13',
      hora: '09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Bendición de Ramos',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-13',
      hora: '11:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Bendición de Ramos',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-13',
      hora: '16:15:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Bendición de Ramos',
      descripcion: 'Misa Capilla Sagrada Familia Jactay',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-13',
      hora: '18:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Bendición de Ramos',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-13',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa & Confesiones',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-14',
      hora: '07:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa & Confesiones',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-14',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa & Confesiones',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-15',
      hora: '07:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa Crismal en la Catedral',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-15',
      hora: '10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa & Confesiones',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-15',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa & Confesiones',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-16',
      hora: '07:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa & Confesiones',
      descripcion: 'Procesión en Honor al Señor Cauivo y la Virgen Macarena',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-16',
      hora: '18:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Liturgia de Jueves Santo',
      descripcion: 'Capilla Sagrada Familia Jactay',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-17',
      hora: '16:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa en el Templo & lavado de pies',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-17',
      hora: '16:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa en el Templo & lavado de pies',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-17',
      hora: '17:30:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa en el Templo & lavado de pies',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-17',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Reflexión de las 7 palabras',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-18',
      hora: '17:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Liturgia de la Pasión y Adoración de la Cruz',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-18',
      hora: '17:30:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Solemne Vigilia Pascual',
      descripcion: 'PREGÓN PASCUAL: Bendición del fuego y el agua',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-19',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Procesión Cristo de Resucitado',
      descripcion: 'Con dirección a la catedral de Huánuco para el encuentro con la Virgen de la Dolorosa',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-20',
      hora: '04:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa en el Templo',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-20',
      hora: '07:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa en el Templo',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-20',
      hora: '09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa en el Templo',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-20',
      hora: '11:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa en el Templo',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-20',
      hora: '16:15:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa en la Capilla Sagrada Familia Jactay',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-20',
      hora: '18:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa en el templo',
      latitud: -9.926924862486043,
      longitud: -76.24255809009715,
      fecha: '2025-04-20',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 5,
      created_at: new Date(),
      updated_at: new Date()
    },

    /*  seed muni de huanuco */

    {
      nombre: 'Misa y bendición de los Ramos',
      latitud: -9.928677340525136,
      longitud: -76.23947040364402,
      fecha: '2025-04-13',
      hora: '07:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa y bendición de los Ramos',
      latitud: -9.928677340525136,
      longitud: -76.23947040364402,
      fecha: '2025-04-13',
      hora: '11:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Recorrido procesional del Seño del Triunfo',
      latitud: -9.936068820833828,
      longitud: -76.24479371713738,
      fecha: '2025-04-13',
      hora: '15:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Liturgia y bendición de Ramos en el Atrio del templo',
      latitud: -9.926819155089683,
      longitud: -76.2424186355108,
      fecha: '2025-04-13',
      hora: '07:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Bendición de las palmas y Celebración Eucarística',
      latitud: -9.936068820833828,
      longitud: -76.24479371713738,
      fecha: '2025-04-13',
      hora: '07:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Bendición de Ramos',
      latitud: -9.926819155089683,
      longitud: -76.2424186355108,
      fecha: '2025-04-13',
      hora: '09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Bendición de Ramos',
      latitud: -9.926819155089683,
      longitud: -76.2424186355108,
      fecha: '2025-04-13',
      hora: '11:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Bendición de Ramos',
      latitud: -9.926819155089683,
      longitud: -76.2424186355108,
      fecha: '2025-04-13',
      hora: '16:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Bendición de Ramos',
      latitud: -9.926819155089683,
      longitud: -76.2424186355108,
      fecha: '2025-04-13',
      hora: '18:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Bendición de Ramos',
      latitud: -9.926819155089683,
      longitud: -76.2424186355108,
      fecha: '2025-04-13',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa y Confesiones',
      latitud: -9.926914268980926,
      longitud: -76.24239717783976,
      fecha: '2025-04-14',
      hora: '07:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa Crismal en La Catedral',
      latitud: -9.928783667945963,
      longitud: -76.23951812060334,
      fecha: '2025-04-14',
      hora: '10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Rezo del Santo Rosario y confesiones',
      latitud: -9.931912048281553,
      longitud: -76.23953825102112,
      fecha: '2025-04-14',
      hora: '18:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa y confesiones',
      latitud: -9.926914268980926,
      longitud: -76.24239717783976,
      fecha: '2025-04-14',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Celebración Eucaristica y confesiones',
      latitud: -9.936174499945784,
      longitud: -76.24482590359636,
      fecha: '2025-04-14',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa en honor a Jesús Nazareno.',
      latitud: -9.931912048281553,
      longitud: -76.23953825102112,
      fecha: '2025-04-14',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Recorrido procesional',
      latitud: -9.931912048281553,
      longitud: -76.23953825102112,
      fecha: '2025-04-14',
      hora: '20:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Solemne Misa Crismal',
      latitud: -9.928783667945963,
      longitud: -76.23951812060334,
      fecha: '2025-04-15',
      hora: '10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Reso del Santo Rosario y Confesiones',
      latitud: -9.931912048281553,
      longitud: -76.23953825102112,
      fecha: '2025-04-15',
      hora: '18:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Reso del Santo Rosario y Confesiones',
      latitud: -9.931912048281553,
      longitud: -76.23953825102112,
      fecha: '2025-04-15',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Reso del Santo Rosario y Confesiones',
      latitud: -9.931912048281553,
      longitud: -76.23953825102112,
      fecha: '2025-04-15',
      hora: '20:30:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa y Confesiones',
      latitud: -9.92681915504742,
      longitud: -76.24223624547564,
      fecha: '2025-04-15',
      hora: '07:30:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa y Confesiones',
      latitud: -9.92681915504742,
      longitud: -76.24223624547564,
      fecha: '2025-04-15',
      hora: '19:30:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa y Confesiones',
      latitud: -9.92681915504742,
      longitud: -76.24223624547564,
      fecha: '2025-04-16',
      hora: '07:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa y Procesión en honor al Señor Cautivo y la Virgen Macarena',
      latitud: -9.92681915504742,
      longitud: -76.24223624547564,
      fecha: '2025-04-16',
      hora: '18:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Santa Misa en honor al Señor del Huerto y confesiones',
      latitud: -9.9361533641265,
      longitud: -76.24449330974285,
      fecha: '2025-04-16',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Feria artesanal, productiva y turística',
      latitud: -9.929333132002943,
      longitud: -76.23955255761787,
      fecha: '2025-04-17',
      hora: '10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Liturgia del Jueves Santo en Jactay',
      latitud: -9.92681915504742,
      longitud: -76.24223624547564,
      fecha: '2025-04-17',
      hora: '16:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa en el Templo y Lavado de pies',
      latitud: -9.92681915504742,
      longitud: -76.24223624547564,
      fecha: '2025-04-17',
      hora: '16:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa en el Templo y Lavado de pies',
      latitud: -9.92681915504742,
      longitud: -76.24223624547564,
      fecha: '2025-04-17',
      hora: '17:30:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Misa en el Templo y Lavado de pies',
      latitud: -9.92681915504742,
      longitud: -76.24223624547564,
      fecha: '2025-04-17',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Degustación de dulces tradicionales del barrio iskuchaka',
      latitud: -9.93616393203655,
      longitud: -76.24481517480842,
      fecha: '2025-04-17',
      hora: '16:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Celebración de la institución Eucarística y lavado de los Apóstoles',
      latitud: -9.92681915504742,
      longitud: -76.24223624547564,
      fecha: '2025-04-17',
      hora: '18:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Celebración de la cena del Señor',
      latitud: -9.931263664998669,
      longitud: -76.24691011898618,
      fecha: '2025-04-17',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Adoración al santisimo Sacramento con participación de toda feligresía y grupos eclesiales de la parroquia',
      latitud: -9.93616393203655,
      longitud: -76.24481517480842,
      fecha: '2025-04-17',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Adoración al santisimo Sacramento con participación de toda feligresía y grupos eclesiales de la parroquia',
      latitud: -9.93616393203655,
      longitud: -76.24481517480842,
      fecha: '2025-04-17',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Feria artesanal, productiva y turística',
      latitud: -9.929370120457639,
      longitud: -76.23969203224942,
      fecha: '2025-04-18',
      hora: '10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Reso de laudes de Viernes Santo',
      latitud: -9.92868790866963,
      longitud: -76.23922364001459,
      fecha: '2025-04-18',
      hora: '07:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Sermón de las 7 palabras',
      latitud: -9.92868790866963,
      longitud: -76.23922364001459,
      fecha: '2025-04-18',
      hora: '10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Vía crucis en la nueva capilla "Niño Jesús Héroes del Cenepa" Pichipampa',
      latitud: -9.936148080171355,
      longitud: -76.24462205551966,
      fecha: '2025-04-18',
      hora: '10:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Celebración de la Pasión del Señor, Adoración de la Cruz',
      latitud: -9.92868790866963,
      longitud: -76.23922364001459,
      fecha: '2025-04-18',
      hora: '15:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Recorido de salida  de la Capilla Cruz verde, sale por Seichi zumi',
      latitud: -9.931237244827177,
      longitud: -76.24684574574,
      fecha: '2025-04-18',
      hora: '15:30:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Reflexión de las 7 palabras',
      latitud: -9.926961825873923,
      longitud: -76.24179636271664,
      fecha: '2025-04-18',
      hora: '16:15:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Liturgia de la Pasión y adoración de la Santa Cruz',
      latitud: -9.931880369477566,
      longitud: -76.23934511117798,
      fecha: '2025-04-18',
      hora: '16:15:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Celebración de la Pasión al Señor',
      latitud: -9.93616921599144,
      longitud: -76.24445039413595,
      fecha: '2025-04-18',
      hora: '18:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Celebración de la Pasión al Señor',
      latitud: -9.931880369477566,
      longitud: -76.23934511117798,
      fecha: '2025-04-18',
      hora: '18:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Via Crucis parroquial, recorrido por todo el territorio de la parroquia',
      latitud: -9.931880369477566,
      longitud: -76.23934511117798,
      fecha: '2025-04-18',
      hora: '20:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Escenificación de la Vía Crucis',
      latitud: -9.835010802282413,
      longitud: -76.09697038896829,
      fecha: '2025-04-18',
      hora: '12:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Procesión del Santo Sepulcro y de la virgen de la Soledad',
      latitud: -9.928561090828948,
      longitud: -76.23948113209015,
      fecha: '2025-04-18',
      hora: '20:00:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Adoración de la Cruz',
      latitud: -9.931152700264079,
      longitud: -76.24692084759536,
      fecha: '2025-04-18',
      hora: '20:30:00',
      imagenes: JSON.stringify(['uploads/eventos/cultura-1.jpg', 'uploads/eventos/cultura-2.jpg', 'uploads/eventos/cultura-3.jpg']),
      organizacion_id: 6,
      created_at: new Date(),
      updated_at: new Date()
    },

    /* seeds  muni amarilis */

    {
      nombre: 'Feria Gastronómica Artesanal y de Emprendimiento',
      latitud: -9.844769645711201,
      longitud: -76.20977350479757,
      fecha: '2025-04-11',
      hora: '09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Feria Gastronómica Artesanal y de Emprendimiento',
      latitud: -9.844769645711201,
      longitud: -76.20977350479757,
      fecha: '2025-04-12',
      hora: '09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Feria Gastronómica Artesanal y de Emprendimiento',
      latitud: -9.844769645711201,
      longitud: -76.20977350479757,
      fecha: '2025-04-13',
      hora: '09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Feria Gastronómica Artesanal y de Emprendimiento',
      latitud: -9.844769645711201,
      longitud: -76.20977350479757,
      fecha: '2025-04-14',
      hora: '09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Feria Gastronómica Artesanal y de Emprendimiento',
      latitud: -9.844769645711201,
      longitud: -76.20977350479757,
      fecha: '2025-04-15',
      hora: '09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Feria Gastronómica Artesanal y de Emprendimiento',
      latitud: -9.844769645711201,
      longitud: -76.20977350479757,
      fecha: '2025-04-16',
      hora: '09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Feria Gastronómica Artesanal y de Emprendimiento',
      latitud: -9.844769645711201,
      longitud: -76.20977350479757,
      fecha: '2025-04-17',
      hora: '09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Feria Gastronómica Artesanal y de Emprendimiento',
      latitud: -9.844769645711201,
      longitud: -76.20977350479757,
      fecha: '2025-04-18',
      hora: '09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Feria Gastronómica Artesanal y de Emprendimiento',
      latitud: -9.844769645711201,
      longitud: -76.20977350479757,
      fecha: '2025-04-19',
      hora: '09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Feria Gastronómica Artesanal y de Emprendimiento',
      latitud: -9.844769645711201,
      longitud: -76.20977350479757,
      fecha: '2025-04-20',
      hora: '09:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Venta de Pescado',
      latitud: -9.939897644610516,
      longitud: -76.24046034607179,
      fecha: '2025-04-14',
      hora: '07:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Venta de Pescado',
      latitud: -9.922964828504593,
      longitud: -76.23180308951325,
      fecha: '2025-04-15',
      hora: '07:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Peregrinación al Cerro Paucarbamba San Cristóbal - Amarilis Peregrino de Fe y Tradición',
      latitud: -9.944469644332827,
      longitud: -76.24241591377145,
      fecha: '2025-04-17',
      hora: '04:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Visita a las Iglesias y Capillas de Paucarbamba Paucarbambilla, Zona Cero, San Luis, Llicua y el Cristo Redentor',
      latitud: -9.942241450452403,
      longitud: -76.23640895174543,
      fecha: '2025-04-17',
      hora: '18:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Vía Crucis en Malconga (Misión Punta)',
      latitud: -9.949329803880193,
      longitud: -76.15943796230565,
      fecha: '2025-04-18',
      hora: '03:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Mini Concierto Musical, Cultural y Espiritual',
      latitud: -9.94478638148117,
      longitud: -76.24272167601988,
      fecha: '2025-04-19',
      hora: '17:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Teatro Musical de Esperanza y Fe',
      latitud: -9.94478638148117,
      longitud: -76.24272167601988,
      fecha: '2025-04-20',
      hora: '18:30:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 7,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Bendición y Distribución de Palmas Procesión Imagen Domingo de Ramos a la Iglesia Matriz ',
      latitud: -9.862867704350126,  
      longitud: -76.16991274416652,
      fecha: '2025-04-13',
      hora: '15:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 8,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Santa Misa Entrada Triunfal de Jesús ',
      latitud: -9.862867704350126,  
      longitud: -76.16991274416652,
      fecha: '2025-04-13',
      hora: '17:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 8,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Santa Misa',
      latitud: -9.862878275142405, 
      longitud: -76.16997711743592,
      fecha: '2025-04-14',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 8,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Santa Misa en Honor a Jesús Cautivo',
      latitud: -9.862878275142405, 
      longitud: -76.16997711743592,
      fecha: '2025-04-15',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 8,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Santa Misa en Honor a Jesús Nazareno ',
      latitud: -9.862878275142405, 
      longitud: -76.16997711743592,
      fecha: '2025-04-16',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 8,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Lavatorio de los pies Institución de la Eucaristía Adoración al Santísimo ',
      latitud: -9.862878275142405, 
      longitud: -76.16997711743592,
      fecha: '2025-04-17',
      hora: '19:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 8,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Vía Crucis de la Aurora ',
      latitud: -9.862878275142405, 
      longitud: -76.16997711743592,
      fecha: '2025-04-18',
      hora: '06:30:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 8,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'LITURGIA DE LA PALABRA Sermón de las 7 palabras de Jesús Declavación y Adoración de la Imagen de Jesús ',
      latitud: -9.862878275142405, 
      longitud: -76.16997711743592,
      fecha: '2025-04-18',
      hora: '18:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 8,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'VIGILIA PASCUAL ',
      latitud: -9.862878275142405, 
      longitud: -76.16997711743592,
      fecha: '2025-04-19',
      hora: '18:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 8,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'PROCESIÓN CRISTO RESUCITADO Y LA VIRGEN MARIA ',
      latitud: -9.862878275142405, 
      longitud: -76.16997711743592,
      fecha: '2025-04-20',
      hora: '05:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 8,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      nombre: 'Santa misa de PASCUA DE RESURRECCIÓN ',
      latitud: -9.862878275142405, 
      longitud: -76.16997711743592,
      fecha: '2025-04-20',
      hora: '06:00:00',
      imagenes: JSON.stringify(['uploads/eventos/municipal-1.jpg', 'uploads/eventos/municipal-2.jpg']),
      organizacion_id: 8,
      created_at: new Date(),
      updated_at: new Date()
    },
    
    

  ]);
};