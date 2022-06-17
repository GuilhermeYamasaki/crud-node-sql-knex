//insere de valores na tabela users automaticamente
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, colName: 'Guilherme'},
    {id: 2, colName: 'Tharlei'},
    {id: 3, colName: 'Thiffany'}
  ]);
};
