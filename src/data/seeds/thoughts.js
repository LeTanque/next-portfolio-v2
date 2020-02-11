
exports.seed = (knex) => {
  return knex('thoughts').del()
    .then(() => {
      return knex('thoughts').insert([
        { message: "Pineapple on pizza?", author: "LeTanque" }
      ]);
    });
};


