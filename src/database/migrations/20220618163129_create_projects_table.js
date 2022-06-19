const {onUpdateTrigger} = require('../../../knexfile')
exports.up = async function(knex) {
    return knex.schema.createTable('projects', function(table){ 
        table.increments('id')
        table.text('title')
        
        //relaciona com a tabela users
        //casacade delat todo o projeto caso o usuário seja deletado
        table.integer('user_id').references('id').inTable('users'). notNullable(). onDelete('cascade')
        table.timestamps(true, true)
    
    }).then(() =>  knex.raw(onUpdateTrigger('projects')) )
};


exports.down = async function(knex) { 
    return knex.schema.dropTable('projects');
};

