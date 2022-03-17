const db = require('../db/db')

const Favourites = {
    findByEmail: email => {
        const sql = `
        SELECT * FROM users
        WHERE email = $1
        `
        return db
            .query(sql, [email])
            .then(dbRes => dbRes.rows[0])
},

    findFavouritesByEmail: (email) => {
        const sql = `
          SELECT * FROM favourites
          WHERE email = (
            SELECT email FROM users WHERE email = $1
          ) 
          users(name, email, password_digest)
          VALUES ($1, $2, $3)
          RETURNING *
        `
        return db
          .query(sql, [email])
          .then(dbRes => dbRes.rows[0])
      }
}
    
    module.exports = Favourites