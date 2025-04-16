exports.seed = async function (knex) {
  await knex('organizacion').del();

  await knex('organizacion').insert([
    {
      id: 1,
      nombre: 'Dircetur Huánuco',
      descripcion: 'Dirección Regional de Comercio Exterior y Turismo de Huánuco, encargada de promover el desarrollo turístico y comercial de la región.',
      tipo: 'Municipal'
    },
    {
      id: 2,
      nombre: 'Parroquia San Sebastian',
      descripcion: 'Organización dedicada a promover actividades culturales y festivas en la comunidad.',
      tipo: 'Parroquial'
    },
    {
      id: 3,
      nombre: 'Municipalidad Provincial Dos de Mayo – Huánuco',
      descripcion: 'Brindando servicios de calidad, mejorando el nivel de vida y bienestar de la población rural y urbana de la provincia de dos de mayo, con equidad, honestidad lealtad, transparencia y justicia social.',
      tipo: 'Municipal'
    },
    {
      id: 4,
      nombre: 'Parroquia San Pedro',
      descripcion: 'Al poco tiempo de haber llegado los misioneros combonianos en 1938 para hacerse cargo de la Parroquia de Pozuzo el Obispo de entonces Mons. Francisco Rubén Berroa les solicitó su colaboración para enseñar en el Seminarios Diocesano San Teodoro.',
      tipo: 'Parroquial'
    },
    {
      id: 5,
      nombre: 'Parroquia San Francisco',
      descripcion: 'Al poco tiempo de haber llegado los misioneros combonianos en 1938 para hacerse cargo de la Parroquia de Pozuzo el Obispo de entonces Mons. Francisco Rubén Berroa les solicitó su colaboración para enseñar en el Seminarios Diocesano San Teodoro.',
      tipo: 'Parroquial'
    },
    {
      id: 6,
      nombre: 'Municipalidad Provincial de Huánuco',
      descripcion: 'Es el máximo Órgano de Gobierno en la Municipalidad Provincial de Huánuco',
      tipo: 'Municipal'
    },
    {
      id: 7,
      nombre: 'Municipalidad Distrital de Amarilis',
      descripcion: 'Es el máximo Órgano de Gobierno en la Municipalidad Provincial de Amarilis',
      tipo: 'Municipal'
    },
    {
      id: 8,
      nombre: 'Municipalidad Distrital de Santa Maria del Valle',
      descripcion: 'Es el máximo Órgano de Gobierno en la Municipalidad Provincial de Amarilis',
      tipo: 'Municipal'
    },
    {
      id: 9,
      nombre: 'Parroquia de Ambo',
      descripcion: 'Es el máximo Órgano de Gobierno en la Municipalidad Provincial de Ambo',
      tipo: 'Parroquial'
    },
  ]);
};