const express = require('express')
const router = express.Router()

const add = require('./handlers/add')
const all = require('./handlers/all')

router.post('/add', add)
router.get('/', all)

module.exports = router
