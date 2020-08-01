const express = require('express')
const UserProfile = require('../DB/UserProfile')
const router = express.Router()

router.post('/', async (req, res) => {
    const {userName, orders} = req.body
    let userProfile = {}
    userProfile.userName = userName
    userProfile.orders = orders
    let userProfileModel = new UserProfile(userProfile)
    await userProfileModel.save()
    res.json(userProfileModel)
})

module.exports = router