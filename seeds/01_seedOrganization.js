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
      nombre: 'Iglesia san sebastian',
      descripcion: 'Organización dedicada a promover actividades culturales y festivas en la comunidad.',
      tipo: 'Parroquial'
    },
    {
      id: 3,
      nombre: 'Asociación de Jóvenes',
      descripcion: 'Grupo juvenil enfocado en realizar eventos recreativos y sociales para la integración comunitaria.',
      tipo: 'Parroquial'
    },
    {
      id: 4,
      nombre: 'Parroquia Santa María',
      descripcion: 'Comunidad religiosa que organiza celebraciones y eventos durante la Semana Santa.',
      tipo: 'Parroquial'
    }
  ]);
};