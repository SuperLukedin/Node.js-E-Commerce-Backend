const express = require('express')
const Product = require('../DB/Product')
const router = express.Router()

router.post('/', async (req, res) => {
    const {name, price, path} = req.body
    let product = {}
    product.name = name
    product.price = price
    product.path = path
    let productModel = new Product(product)
    await productModel.save()
    res.json(productModel)
})

module.exports = router