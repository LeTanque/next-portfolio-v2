
exports.up = function(knex) {
    return knex.schema.createTable("skills", (skills) => {
        skills.increments("id");
        skills.text("skill").notNullable();
        skills.text("type").notNullable();
        skills.timestamp('created_at').defaultTo(knex.fn.now());
        skills.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('skills');
};

