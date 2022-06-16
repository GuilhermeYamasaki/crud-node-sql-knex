//Faz conexao com o banco de dados
//Exporta a conexao e permite utilzar o knex
const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile('development'))

module.exports = knex