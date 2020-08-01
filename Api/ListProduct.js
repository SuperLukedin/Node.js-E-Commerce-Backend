const express = require('express')
const Product = require('../DB/Product')
const router = express.Router()

router.get('/', (req, res) => {    
    Product.find({}, (err, products) => {
        if (err) {
            res.send(err)
        } else {
            res.json(products)
        }
    })    
})

module.exports = router