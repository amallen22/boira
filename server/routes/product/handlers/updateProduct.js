const Product = require('../../../models/Product')

function updateProduct (req, res) {
  const { id } = req.params
  const { title, image, subtitle, category, categoryGroup, price } = req.body

  console.log(req.params.id)
  console.log(req.body.title)
  console.log(req.body.subtitle)
  console.log(req.body.image)
  console.log(req.body.description)
  console.log(req.body.category)
  console.log(req.body.categoryGroup)
  console.log(req.body.price)
  // console.log(req.params.title)
  // console.log(req)

  Product
    .findByIdAndUpdate(id, {$set: { title, image, subtitle, category, categoryGroup, price }})
      .then(() => res.send(`Product with id: ${id} is returned`))
      // .then(req => {
      //   console.log(req)
      //   res.send(req)
      // })
}

module.exports = updateProduct
