const Product = require('../../../models/Product')

function showProduct (req, res) {
	const { id } = req.params
	console.log(req.params.id)


 	Product
 		.findById(id)
    	//.then(() => res.send(`Product with id: ${id} is returned`))
    	.then(req =>{
    		console.log(req)
    	res.send( req )})
}

module.exports = showProduct



// const Restaurant = require('../models/restaurant')

// // const byBorough = (req, res) => {
// //   const { limit, projection, page } = req
// //   const { borough } = req.params

// //   Restaurant
// //     .find({ borough })
// //     .select(projection)
// //     .limit(limit)
// //     .then(restaurant => res.json({
// //       results: restaurant,
// //       num_pages: 'bla',
// //       currentPage: page,
// //       num_results: limit
// //     }))
// // }

// // module.exports = byBorough



// const Product = require('../../../models/Product')

// function showProduct (req, res) {
// 	const { id } = req.params

// 	const dataToUpdate = {}

// 	if (title) dataToUpdate.title = title
// 	if (image) dataToUpdate.image = image 
// 	if (subtitle) dataToUpdate.subtitle = subtitle 
// 	if (category) dataToUpdate.category = category 
// 	if (categoryGroup) dataToUpdate.categoryGroup = categoryGroup 
// 	if (description) dataToUpdate.description = description 
// 	if (price) dataToUpdate.price = price 

//   Product.findByIdAndUpdate(id, dataToUpdate)
//     .then(showProduct => res.send('hola', {showProduct}))
// }

// module.exports = showProduct
 