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
        `
        return db
          .query(sql, [email])
          .then(dbRes => dbRes.rows[0])
      },

      setFavouriteCountryByEmail: (country, email) => {
        const sql = `
          UPDATE favourites
          SET country = $1
          WHERE email = (
            SELECT email FROM users WHERE email = $2
          )
        `
        return db
          .query(sql, [country, email])
          .then(dbRes => dbRes.rows[0])
      },

      setFavouriteTournamentByEmail: (tournament, email) => {
        const sql = `
          UPDATE favourites
          SET tournament = $1
          WHERE email = (
            SELECT email FROM users WHERE email = $2
          )
        `
        return db
          .query(sql, [tournament, email])
          .then(dbRes => dbRes.rows[0])
      },

      setFavouriteGenderByEmail: (gender, email) => {
        const sql = `
          UPDATE favourites
          SET gender = $1
          WHERE email = (
            SELECT email FROM users WHERE email = $2
          )
        `
        return db
          .query(sql, [gender, email])
          .then(dbRes => dbRes.rows[0])
      },

      setFavouriteMatchTypeByEmail: (match_type, email) => {
        const sql = `
          UPDATE favourites
          SET match_type = $1
          WHERE email = (
            SELECT email FROM users WHERE email = $2
          )
        `
        return db
          .query(sql, [match_type, email])
          .then(dbRes => dbRes.rows[0])
      },

      setFavouritePlayerByEmail: (player, email) => {
        const sql = `
          UPDATE favourites
          SET player = $1
          WHERE email = (
            SELECT email FROM users WHERE email = $2
          )
        `
        return db
          .query(sql, [player, email])
          .then(dbRes => dbRes.rows[0])
      },
}
    
module.exports = Favourites