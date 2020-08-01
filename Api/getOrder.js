const express = require('express')
const Order = require('../DB/Order')
const router = express.Router()

router.get('/:username', (req, res) => {    
    let userName = req.params.username
    if (userName == 'admin') {
        Order.find({})
            .populate('products')
            .exec((err, orders) => {              
                res.json(orders)
            })
    } else {
        Order.find({userName: userName})
            .populate('products')
            .exec((err, orders) => {                
                res.json(orders)
            })
    }    
})

module.exports = router