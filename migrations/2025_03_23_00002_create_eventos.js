exports.up = function (knex) {
  return knex.schema.createTable('eventos', function (table) {
    table.increments('id').primary().unsigned();
    table.string('nombre', 255).notNullable();
    table.text('descripcion').nullable();
    table.decimal('latitud', 10, 7).nullable();
    table.decimal('longitud', 10, 7).nullable();
    table.date('fecha').notNullable();
    table.time('hora').notNullable();
    table.json('imagenes').nullable();
    table.integer('organizacion_id').unsigned().nullable();
    table.foreign('organizacion_id').references('id').inTable('organizacion').onDelete('SET NULL');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('eventos');
};