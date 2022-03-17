//middleware for logging requests

function logger(req, res, next){
    console.log(`${new Date} ${req.method} ${req.path}`)

    next()
}

module.exports = logger;