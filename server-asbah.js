const express = require('express')

//middlewares
const logger = require('./middlewares/logger') 

//controllers
const matchesController = require('./controllers/matches_controller')

//server setup 
const app = express()
const port = 3000

//start web server
app.listen(port, 
    () => console.log(`Cricket server started... listening on port ${port}`)
)

//using middlewares
app.use(logger) 

app.use(express.static('client'))

app.use(express.json())

 
//routes
app.use('/api/matches', matchesController)  