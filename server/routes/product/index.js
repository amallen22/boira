const express = require('express')
const router = express.Router()

const showProduct = require('./handlers/showProduct')
const updateProduct = require('./handlers/updateProduct')

router.get('/:id', showProduct)
router.put('/:id', updateProduct)

module.exports = router
