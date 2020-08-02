const express = require('express')
const User = require('../DB/User')
const router = express.Router()
const bcrypt = require('bcrypt')
router.post('/', async (req, res) => {
    try {
        const {username, password} = req.body        
        const hashedPassword = await bcrypt.hash(password, 10)
        let user = {}
        user.username = username
        user.password = hashedPassword
        let userModel = new User(user)
        await userModel.save()
        res.json({success: true, message: "register done!"})
    } catch {
        res.status(500).send()
    }
})

module.exports = router