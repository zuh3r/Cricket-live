const pg = require('pg')

const db = new pg.Pool({
    database: 'cricket_live'
})

module.exports = db