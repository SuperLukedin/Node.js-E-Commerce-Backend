const express = require('express')
const Order = require('../DB/Order')
const router = express.Router()

router.post('/', async (req, res) => {
    const {userName, numOfProducts, totalPrice, product_ids} = req.body
    let order = {}
    order.userName = userName
    order.numOfProducts = numOfProducts
    order.totalPrice = totalPrice
    order.products = product_ids
    let orderModel = new Order(order)  // update id, poplulate,  nginx, PM2
    await orderModel.save()
    res.json(orderModel)
})

module.exports = router