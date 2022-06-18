const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')
const ProjectController = require('./controllers/ProjectController')




//rota para pegar usuários
routes.get('/users', UserController.index)

//rota para criar usuários
routes.post('/users', UserController.create)

//rota para atualizar usuários
routes.put('/users:id', UserController.update)

//rota para deletar usuários
routes.delete('/users:id', UserController.delete)

//
routes.get('/projects', ProjectController.index)
routes.post('/projects', ProjectController.create)


module.exports = routes