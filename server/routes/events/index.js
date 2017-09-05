const express = require('express')
const router = express.Router()

const addEvent = require('./handlers/addEvent')
const showEvents = require('./handlers/showEvents')

router.post('/add', addEvent)
router.get('/', showEvents)

module.exports = router
