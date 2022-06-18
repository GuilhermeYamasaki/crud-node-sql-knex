const express = require('express')
const routes = requite('./routes')

const app = express()

app.use(express.json()) //recebe body no estilo json
app.use(routes)

//not found error
app.use((req, res, next) => {
    const error = new Error('Mensagem de erro "not found"')
    error.status = 404
    next(error)
})

//catch all
//next = próximo passo da requisição
app.use((req, res, next) => {
    res.status(error.status || 500)
    res.json({error: error.message})
})



//ligar o servidor
app.listen(3000, () => console.log('Server running on port 3000'))