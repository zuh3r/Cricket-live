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

module.exports = router