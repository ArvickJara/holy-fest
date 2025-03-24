exports.seed = async function (knex) {
    await knex('organizacion').del();
    
    await knex('organizacion').insert([
      {
        id: 1,
        nombre: 'Municipalidad de Amarilis',
        descripcion: 'La Municipalidad de Amarilis es una entidad pública encargada de la administración local del distrito de Amarilis, promoviendo el desarrollo y bienestar de sus ciudadanos.',
      },
      {
        id: 2,
        nombre: 'Comité de Cultura',
        descripcion: 'Organización dedicada a promover actividades culturales y festivas en la comunidad.',
      },
      {
        id: 3,
        nombre: 'Asociación de Jóvenes',
        descripcion: 'Grupo juvenil enfocado en realizar eventos recreativos y sociales para la integración comunitaria.',
      }
    ]);
  };