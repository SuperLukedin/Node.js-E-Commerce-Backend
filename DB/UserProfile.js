const mongoose = require('mongoose')

const userProfile = new mongoose.Schema({
    userName: {
        type: String
    },
    orders: {
        type: Array
    }
});

module.exports = UserProfile = mongoose.model('userProfile', userProfile)