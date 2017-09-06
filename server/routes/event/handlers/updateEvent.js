const Event = require('../../../models/Event')

function updateEvent (req, res) {
  const { id } = req.params
  const { day, month, year, place, location, ticketLink } = req.body

  console.log('req.body => handler route updateEvent.js: ' + req.body)

  Event
    .findByIdAndUpdate(id, {$set: { day, month, year, place, location, ticketLink }})
      .then(() => res.send(`Event with id: ${id} is returned`))
}

module.exports = updateEvent
