const Event = require('../../../models/Event')

function showEvents (req, res) {
  Event.find()
    .then(events => res.send({ events }))
}

module.exports = showEvents
