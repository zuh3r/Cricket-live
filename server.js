<<<<<<< HEAD
const express = require("express");

const logger = require("./middleware/logger");
const sessions = require("./middleware/sessions");

const usersController = require("./controllers/users_controller");
const sessionsController = require("./controllers/sessions_controller");

const app = express();
const port = 8674;

app.listen(port, () => console.log(`listening on port ${port}`));

app.use(logger);

app.use(express.static("client"));

app.use(express.json());

app.use(sessions);

app.use("/api/users", usersController);
app.use("/api/sessions", sessionsController);
=======
const express = require('express')

//middlewares
const logger = require('./middlewares/logger') 

//controllers
const matchesController = require('./controllers/matches_controller')
const newsController = require('./controllers/news_controller')

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
app.use('/api/news', newsController)
>>>>>>> 34d4e8e (news api + tournaments api)
