const knex = require('../database')


module.exports = {
    async index(req, res) { //select
        const results = await knex('users')
        .where('deleted_at', null) //vai trazer usuarios cujo delete_at == null
        return res.json(results)
    },

    async create(req, res, next) { //insert
        try {
            const {username} = req.body
            await knex('users').insert({username})
            return res.status(201).send()
        } catch (error) {
            next (error)
        }
    },

    async update(req, res, next) { //update
        try {
            const {username} = req.body
            const {id} = req.params

            await knex('users').update({username}).where({id})
            return res.status(200).send()
        } catch (error) {
            next (error)
        }
    },

    async delete(req, res, next) { //delete
        try {
            const {id} = req.params
            await knex('users').where({ id }).update('deleted_at', new Date()) //soft-delete
            return res.status(200).send()
        } catch (error) {
            next (error)
        }
    }
}