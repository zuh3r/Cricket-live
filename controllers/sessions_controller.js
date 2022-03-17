// Kenny created file 16/3

const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcrypt')

const router = express.Router()

router.post('/', (req, res) => {
    const { email, password } = req.body

    User
        .findByEmail(email)
        .then(user => {
            if (user) {
                const isValidPassword = bcrypt.compareSync(password, user.password_digest)
                if (isValidPassword) {
                    req.session.userId = user.id
                    res.status(200).json({ username: user.name, email: user.email })
                } else {
                    res.status(422).json({ message: 'Invalid email or password' })
                }
            } else {
                res.status(422).json({ message: 'Invalid email or password' })
            }
        })
})

router.delete('/', (req, res) => {
    req.session
        .destroy()
        .then(() => res.json({ message: 'Logout Successful'})) 
})

module.exports = router