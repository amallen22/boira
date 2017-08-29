const Product = require('../models/Product')

const getAllProducts = (req, res) => {
  // const { limit } = req
  Product
    .find()
    // .limit(limit)
    .then(products =>

    res.send({ products })
    )
}

module.exports = getAllProducts
