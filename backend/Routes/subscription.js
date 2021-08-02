const express = require('express')
const router = express.Router()

const subscriptioncontroller = require('../Controller/subscription')

router.get('/get', subscriptioncontroller.get)

router.get('/get/:email', subscriptioncontroller.single_subscription)

router.post('/post',  subscriptioncontroller.post)

router.delete('/remove', subscriptioncontroller.remove_subscription)

module.exports = router