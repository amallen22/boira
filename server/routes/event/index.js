const express = require('express')
const router = express.Router()

const showEvent = require('./handlers/showEvent')
const updateEvent = require('./handlers/updateEvent')
const removeEvent = require('./handlers/removeEvent')

router.get('/:id', showEvent)
router.put('/:id', updateEvent)
router.delete('/:id', removeEvent)

module.exports = router
