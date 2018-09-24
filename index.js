const env = 'development'

const express = require('express')
const settings = require('./config/settings')[env]
const datebase = require('./config/database')
const server = require('./config/server')
const routes = require('./config/routes')

datebase(settings)

const app = express()

server(app)
routes(app)

const port = settings.port

app.listen(port, () => `Server up and running on port ${port}...`)