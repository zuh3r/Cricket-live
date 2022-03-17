<<<<<<< HEAD
=======
// Kenny modified file 16/3

>>>>>>> 38bbcb0 (login/sessions)
const pg = require('pg')

const db = new pg.Pool({
    database: 'cricket_live'
})

module.exports = db