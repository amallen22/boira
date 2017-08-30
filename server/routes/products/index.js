const express = require('express')
const router = express.Router()

const add = require('./add')
const all = require('./all')

router.post('/add', add)
router.get('/', all)

module.exports = router
