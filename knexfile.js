// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: "mysql_teste",
      user: "root",
      password: "0000"
    },
    migrations: {
      tableName: 'knex_migrations',
      directory:`${__dirname}/src/database/migrations`
    },
    seeds: {
      directory:`${__dirname}/src/database/seed`
    }
  },
  onUpdateTrigger: table => `
  create trigger ${table}_updated_at
  before update on ${table}
  for each row
  execute procedure on_update_timestamp()`


};
