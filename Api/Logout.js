const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    result = {}
    result.message = "Logout successfully"
    res.json(result)
})

module.exports = router