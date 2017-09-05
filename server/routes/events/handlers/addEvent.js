const Event = require('../../../models/Event')

function addEvent (req, res) {
  console.log('addEvent.js req.body: ' + req.body.toString())

  const { day, month, year, place, location, ticketLink } = req.body

  const newEvent = new Event({ day, month, year, place, location, ticketLink})

  newEvent.save()
  	.then(() => res.send('ok'))
  	.catch(err => res.send({ err }))
}

module.exports = addEvent
