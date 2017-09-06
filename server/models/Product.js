const mongoose = require('mongoose')
const Schema = mongoose.Schema
const collection = 'products'

const ProductSchema = new Schema({
  imageLink: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  categoryGroup: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
}, { collection })

module.exports = mongoose.model('Products', ProductSchema)
