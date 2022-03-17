const express = require('express')

const logger = require('./middleware/logger')
const sessions = require('./middleware/sessions')

const usersController = require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')

const app = express()
const port = 8674

app.listen(port, 
    () => console.log(`listening on port ${port}`)
)

app.use(logger)

app.use(express.static('client'))

app.use(express.json())

app.use(sessions)

app.use('/api/users', usersController)
app.use('/api/sessions', sessionsController)
