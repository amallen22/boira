const express = require('express')
const router = express.Router()

const showEvent = require('./handlers/showEvent')
const updateEvent = require('./handlers/updateEvent')

router.get('/:id', showEvent)
router.put('/:id', updateEvent)

module.exports = router
