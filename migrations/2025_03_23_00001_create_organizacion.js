exports.up = function (knex) {
    return knex.schema.createTable('organizacion', function (table) {
        table.increments('id').primary().unsigned();
        table.string('nombre', 255).notNullable();
        table.text('descripcion').nullable();
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('organizacion');
};