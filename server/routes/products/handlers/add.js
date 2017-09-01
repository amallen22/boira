const Product = require('../../../models/Product')

function add (req, res) {
  console.log(req.body)

  new Product(req.body).save()
  	.then(() => res.send('ok'))
  	.catch(err => res.send({ err }))
}

module.exports = add
