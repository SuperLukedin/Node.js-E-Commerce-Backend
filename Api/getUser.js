const express = require('express')
const UserProfile = require('../DB/UserProfile')
const router = express.Router()

router.get('/:username', (req, res) => {    
    let userName_ = req.param.username
    UserProfile.findOne({username: userName_}, (err, userProfile) => {
        if (err) {
            res.send(err)
        } else {
            res.json(userProfile)
        }
    })    
})

module.exports = router