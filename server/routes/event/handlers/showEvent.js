const Event = require('../../../models/Event')

function showEvent (req, res) {
  const { id } = req.params
  console.log(req.params.id)

 	Event
 		.findById(id)
    	// .then(() => res.send(`Event with id: ${id} is returned`))
    	.then(req => {
    		console.log(req)
    	res.send(req)
    })
}

module.exports = showEvent
