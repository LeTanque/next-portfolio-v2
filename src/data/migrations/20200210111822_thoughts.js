
exports.up = function(knex) {
    return knex.schema.createTable("thoughts", (thoughts) => {
        thoughts.increments("id");
        thoughts.text("message").notNullable();
        thoughts.text("author").defaultTo("unknown");
        thoughts.timestamp('created_at').defaultTo(knex.fn.now());
        thoughts.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('thoughts');
};
