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
 