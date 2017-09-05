const mongoose = require('mongoose')
const Schema = mongoose.Schema
const collection = 'events'

const EventSchema = new Schema({
  day: {
    type: Number,
    required: true
  },
  month: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  ticketLink: {
    type: String,
    required: true
  }
}, { collection })

module.exports = mongoose.model('Events', EventSchema)
