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
      nombre: 'MUNICIPALIDAD PROVINCIAL DOS DE MAYO – HUÁNUCO',
      descripcion: 'Brindando servicios de calidad, mejorando el nivel de vida y bienestar de la población rural y urbana de la provincia de dos de mayo, con equidad, honestidad lealtad, transparencia y justicia social.',
      tipo: 'Municipal'
    }
  ]);
};