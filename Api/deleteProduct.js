const express = require('express')
const Product = require('../DB/Product')
const router = express.Router()

router.post('/', (req, res) => {
    const { id } = req.body
    Product.deleteOne({_id: id}, (err) => {
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