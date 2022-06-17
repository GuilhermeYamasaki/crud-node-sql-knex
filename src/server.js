const express = require('express')
const routes = requite('./routes')

const app = express()

app.use(routes)



//ligar o servidor
app.listen(3000, () => console.log('Server running on port 3000'))