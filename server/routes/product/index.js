const express = require('express')
const router = express.Router()

const showProduct = require('./handlers/showProduct')
const updateProduct = require('./handlers/updateProduct')
const removeProduct = require('./handlers/removeProduct')

router.get('/:id', showProduct)
router.put('/:id', updateProduct)
router.delete('/:id', removeProduct)

module.exports = router
