// knexfile.js

require('dotenv').config();
module.exports = {
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'holifest_db',
  },
  migrations: {
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: './seeds',
  },
};