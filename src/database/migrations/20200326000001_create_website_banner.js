
exports.up = function(knex) {
    return knex.schema.createTable('website_banner', function(table) {
        table.increments();
        table.string('titulo').notNullable();
        table.text('descricao').notNullable();
        table.string('url_resource');
        table.string('uploaded_resource');
        table.string('action_resource');
        table.boolean('active').notNullable();
        table.boolean('show_links').notNullable();
        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('website_banner');
};
