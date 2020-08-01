const mongoose = require('mongoose')

const order = new mongoose.Schema({
    userName: {
        type: String
    },
    numOfProducts: {
        type: Number
    },
    totalPrice: {
        type: Number
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    }]
});

module.exports = Order = mongoose.model('order', order)