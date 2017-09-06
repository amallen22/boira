const Product = require('../../../models/Product')

function removeProduct (req, res) {
  const { id } = req.params
  Product.findByIdAndRemove(id)
    .then(() => res.send(`Product w/ id ${id} was removed succesfully`))
    .catch(() => res.send(`FAIL!! Product w/ id ${id} was NOT removed`))
}

module.exports = removeProduct
