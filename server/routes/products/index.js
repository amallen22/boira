const express = require('express')
const router = express.Router()

const addProduct = require('./handlers/addProduct')
const getProducts = require('./handlers/getproducts')

// router.post('/', addProduct)
router.get('/', getProducts)

module.exports = router
