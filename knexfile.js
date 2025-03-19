require('dotenv').config();

module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASS || '',
            database: process.env.DB_NAME || 'holyfest',
            charset: 'utf8mb4'
        },
        /* migrations: {
            directory: './database/migrations'
        },
        seeds: {
            directory: './database/seeds'
        },
        debug: true */
    },

    /* production: {
      client: 'mysql2',
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        charset: 'utf8mb4'
      },
      migrations: {
        directory: './database/migrations'
      },
      seeds: {
        directory: './database/seeds'
      },
      pool: {
        min: 2,
        max: 10
      }
    }, */

    /* test: {
      client: 'mysql2',
      connection: {
        host: process.env.TEST_DB_HOST || 'localhost',
        user: process.env.TEST_DB_USER || 'root',
        password: process.env.TEST_DB_PASS || '',
        database: process.env.TEST_DB_NAME || 'holyfest_test',
        charset: 'utf8mb4'
      },
      migrations: {
        directory: './database/migrations'
      },
      seeds: {
        directory: './database/seeds'
      }
    } */
};