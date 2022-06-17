const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')



//rota para pegar usuários
routes.get('/users', UserController.index)

module.exports = routes