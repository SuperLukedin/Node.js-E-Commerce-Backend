const express = require('express')
const Order = require('../DB/Order')
const router = express.Router()

router.post('/', (req, res) => {
    const { id } = req.body
    Order.deleteOne({_id: id}, (err) => {
        if(err) {
            res.send(err)
        } else {
            const result = {}
            result._id = id
            result.deleteDone = true
            res.json(result)
        }        
    })
})

module.exports = router