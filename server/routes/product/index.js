const express = require('express')
const router = express.Router()

const showProduct = require('./handlers/showProduct')

router.get('/:id', showProduct)

module.exports = router
