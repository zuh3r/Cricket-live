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
        
          const sql2 = `
          INSERT INTO favourites(email)
          VALUES ($1)
          `
          db.query(sql2, [email])
        return db
          .query(sql, [name, email, passwordDigest])
          .then(dbRes => dbRes.rows[0].name)
    },
      updateName: (name, id) => {
        const sql = `
            UPDATE users
            SET name = $2
            WHERE id = $1
            RETURNING *   
        `
        return db
            .query(sql, [id, name])
            .then(dbRes => dbRes.rows[0])
    },
    updateEmail: (email, id) => {
        const sql = `
            UPDATE users
            SET name = $2
            WHERE id = $1 
            RETURNING *
        `
        return db
            .query(sql, [id, email])
            .then(dbRes => dbRes.rows[0])
    }
}

    
    module.exports = User

    // add router.get