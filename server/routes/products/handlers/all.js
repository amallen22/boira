const Product = require('../../../models/Product')

function all (req, res) {
  Product.find()
    .then(products => res.send({ products }))
}

module.exports = all
