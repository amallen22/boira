const Event = require('../../../models/Event')

function removeEvent (req, res) {
  const { id } = req.params
  Event.findByIdAndRemove(id)
    .then(() => res.send(`Event w/ id ${id} was removed succesfully`))
    .catch(() => res.send(`FAIL!! Event w/ id ${id} was NOT removed`))
}

module.exports = removeEvent
