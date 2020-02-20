// Update with your config settings.

const config = {
  user: process.env.DB_USER, // e.g. 'my-user'
  password: process.env.DB_PASS, // e.g. 'my-user-password'
  database: process.env.DB_NAME, // e.g. 'my-database'
};

config.host = `${process.env.PROXY_SOCKET_DIR}/${process.env.CLOUD_SQL_INSTANCE_NAME}`;

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/data/zicka.sqlite3',
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

  testing: {
    client: 'pg',
    connection: config,
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
      filename: './src/data/zicka.sqlite3',
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


// Remember - storing secrets in plaintext is potentially unsafe. Consider using
// something like https://cloud.google.com/kms/ to help keep secrets secret.
