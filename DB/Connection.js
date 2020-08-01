const mongoose = require('mongoose')

const URI = "mongodb+srv://dbUser:mongoose@cluster0.sch1a.mongodb.net/order?retryWrites=true&w=majority"

const connectDB = async() => {
    await mongoose.connect(URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    console.log('MongoDB connected!')
}

module.exports = connectDB