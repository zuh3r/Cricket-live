// Kenny created file 16/3

// Will need to create a user model for this controller
const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcrypt')

const router = express.Router()

router.post('/', (req, res) => {
    console.log(req.body)
    const { name, email, password } = req.body

    const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
    console.log(passwordDigest)
    User
        .create(name, email, passwordDigest)
        .then(userName => res.json(userName))
})

router.put('/', (req, res) => {
    const userId = req.session.userId
    const editInput = req.body
    if (Object.keys(editInput)[0].includes('Name')) {
        const newName = editInput['Name-edit']
        User
            .updateName(newName, userId)
            .then(userName => res.json(userName))
    } else if (Object.keys(editInput)[0].includes('Email')) {
        const newEmail = editInput['Email-edit']
        User
            .updateEmail(newEmail, userId)
            .then(userEmail => res.json(userEmail))
    }
    

})


module.exports = router