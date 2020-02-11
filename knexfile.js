// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/data/zicka.sqlite3'
    },
    migrations: {
      directory: './src/data/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
        directory: './src/data/seeds',
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './src/data/zicka.sqlite3'
    },
    migrations: {
      directory: './src/data/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
        directory: './src/data/seeds',
    },
    useNullAsDefault: true,
  }

};
