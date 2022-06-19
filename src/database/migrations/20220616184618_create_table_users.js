const {onUpdateTrigger} = require('../../../knexfile')
exports.up = async function(knex) { //roda uma função de criação de tabela, return uma promisse
    return knex.schema.createTable('users', function(table){ 
        table.increments('id').primary(); //cria uma coluna chamada id a qual é chave primaria
        table.text('username').unique().notNullable(); //cria uma coluna chamada username a qual é unica e não nula
        
        table.timestamp('created_at').defaultTo(knex.fn.now()); //quando adicionar (criação)um novo username coloca o dia e hora do momento criado
        table.timestamp('updated_at').defaultTo(knex.fn.now()); //quando atualizar (atualização) um username coloca o dia e hora do momento atualizado
    
    }) .then(() =>  knex.raw(onUpdateTrigger('users')) ) //cria um trigger para atualizar a data de criação e atualização
};


exports.down = async function(knex) { //rollback é uma função de desfazer a criação de tabela
    return knex.schema.dropTable('users');
};
