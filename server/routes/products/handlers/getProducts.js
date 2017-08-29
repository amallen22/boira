const Product = require('../../../models/Product')

function getProducts (req, res) {
  Product.find()
    .then(products => res.render('store', { products }))
}

module.exports = getProducts
