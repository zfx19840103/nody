let express = require('express')
let router = express.Router()
let user = require('./API/user')

router.get('/user', user.get)

module.exports = router
