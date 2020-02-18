
exports.up = function(knex) {
    return knex.schema.createTable("profile", (profile) => {
        profile.increments("id");
        profile.text("block").notNullable();
        profile.text("style").notNullable();
        profile.timestamp('created_at').defaultTo(knex.fn.now());
        profile.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('profile');
};

