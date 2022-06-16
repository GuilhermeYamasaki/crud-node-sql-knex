// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "knex_teste",
      user: "postgres",
      password: "0000"
    },
    migrations: {
      tableName: 'knex_migrations',
      directory:`${__dirname}/src/database/migrations`
    }
  },


};
