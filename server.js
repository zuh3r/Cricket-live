const express = require('express')

//middlewares
const logger = require('./middlewares/logger') 
const sessions = require('./middlewares/sessions')

//controllers
const matchesController = require('./controllers/matches_controller')
const newsController = require('./controllers/news_controller')
const preferencesController = require('./controllers/preferences_controller')
const sessionsController = require('./controllers/sessions_controller')
const usersController = require('./controllers/users_controller')

//server setup 
const app = express()
const port = process.env.PORT || 3000

//start web server
app.listen(port, 
    () => console.log(`Cricket server started... listening on port ${port}`)
)

//using middlewares
app.use(logger) 
app.use(sessions)

app.use(express.static('client'))

app.use(express.json())


//routes
app.use('/api/matches', matchesController)  
app.use('/api/news', newsController)
app.use('/api/preferences', preferencesController)
app.use('/api/sessions', sessionsController)
app.use('/api/users', usersController)