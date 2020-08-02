const express = require('express')
const User = require('../DB/User')
const router = express.Router()
const bcrypt = require('bcrypt')
router.post('/', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    User.findOne({username: username}, (err, user) => {
        const response = {}
        if (err) {
            res.send(err)
        } else if (!user) {
            response.success = false
            response.message = "User not found"
            res.json(response)
        } else {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result == true) {
                    response.success = true
                    response.message = "Login Successfully"
                    res.json(response)
                } else {
                    response.success = false
                    response.message = "Password incorrect"
                    res.json(response)
                }
            })
        }            
    })
})

module.exports = router