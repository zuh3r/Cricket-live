// Zuher 18/3

const express = require('express')
const Preferences = require('../models/preferences')

const router = express.Router()

router.put('/', (req, res) => {
    const userEmail = req.session.userEmail
    const editInput = req.body
    if (Object.keys(editInput)[0].includes('Country')) {
        Preferences
            .setFavouriteCountryByEmail(editInput, userEmail)
            .then(favouriteCountry => res.json(favouriteCountry))
    } else if (Object.keys(editInput)[0].includes('Tournament')) {
        Preferences
            .setFavouriteTournamentByEmail(editInput, userEmail)
            .then(favouriteTournament => res.json(favouriteTournament))
    } else if (Object.keys(editInput)[0].includes('Gender')) {
        Preferences
            .setFavouriteGenderByEmail(editInput, userEmail)
            .then(favouriteGender => res.json(favouriteGender))
    } else if (Object.keys(editInput)[0].includes('Match Type')) {
        Preferences
            .setFavouriteMatchTypeByEmail(editInput, userEmail)
            .then(favouriteMatchType => res.json(favouriteMatchType))
    } else if (Object.keys(editInput)[0].includes('Player')) {
        Preferences
            .setFavouritePlayerByEmail(editInput, userEmail)
            .then(favouritePlayer => res.json(favouritePlayer))
    }
    

})

module.exports = router