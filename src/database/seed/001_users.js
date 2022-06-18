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

// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('users').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('users').insert([
//         { username: 'maykbrito' },
//         { username: 'diegosf' },
//       ]);
//     });
// };
