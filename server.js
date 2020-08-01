var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
const connectDB = require('./DB/Connection')

app.use(express.static(__dirname + "/public")) // middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
connectDB()

// route
var router = express.Router()

// APIs
app.use('/api/addUser', require('./Api/AddUser'))
app.use('/api/addProduct', require('./Api/AddProduct'))
app.use('/api/addOrder', require('./Api/AddOrder'))
app.use('/api/getOrder', require('./Api/getOrder'))
app.use('/api/listProduct', require('./Api/ListProduct'))
app.use('/api/getUser', require('./Api/getUser'))
app.use('/api/deleteOrder', require('./Api/deleteOrder'))
app.use('/api/deleteProduct', require('./Api/deleteProduct'))

app.use("/", router)
// error
app.use(function(req, res, next) {
    res.end("404 - Request can't be handled")
})
const Port = process.env.Port || 3000
app.listen(Port, () => console.log("server started, listening 3000..."))