const express = require('express')
const router = express.Router()

const add = require('./add')
const all = require('./all')
const update = require('./update')

router.post('/add', add)
router.get('/', all)
router.get('/:id', update)

module.exports = router
