const db = require('../db/db')

const User = {
    findByEmail: email => {
        const sql = `
        SELECT * FROM users
        WHERE email = $1
        `
        return db
            .query(sql, [email])
            .then(dbRes => dbRes.rows[0])
},

    create: (name, email, passwordDigest) => {
        const sql = `
          INSERT INTO users(name, email, password_digest)
          VALUES ($1, $2, $3)
          RETURNING *
        `
        return db
          .query(sql, [name, email, passwordDigest])
          .then(dbRes => dbRes.rows[0].name)
      }
}
    
    module.exports = User