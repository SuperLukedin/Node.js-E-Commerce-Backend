const mongoose = require('mongoose')

const product = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    path: {
        type: String
    }
});

module.exports = Product = mongoose.model('product', product)