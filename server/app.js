const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

// ------ mongoose allProducts require ---------

// show html render nested
app.locals.pretty = true

// define static routes
const pathPublic = path.join(process.cwd(), 'client')
app.use(express.static(pathPublic))

// Necesario para recibir datos usando Ajax
app.use(bodyParser.json())

// este objeto contendrá {key: value}, donde el valor podrá ser string o array (cuando extended es false),
app.use(bodyParser.urlencoded({ extended: false }))

// CONFIG VIEWS
app.set('view engine', 'pug')
app.set('views', path.join(process.cwd(), './server/views'))

// ------ mongoose url origin ---------
const URL_DB = 'mongodb://localhost:27017/boira'

// ------ mongoose ---------
mongoose.promise = Promise
mongoose.connect(URL_DB, {useMongoClient: true})

// ------ CLOUDINARY (upload images) ---------
const routesUploadImage = require('./routes/cloudinary')
app.use(routesUploadImage)

// API ------ router products ---------
const routesProduct = require('./routes/product')
const routesProducts = require('./routes/products')

// API -------------- server routes products  ----------
app.use('/api/products', routesProducts)
app.use('/api/product', routesProduct)
app.use('/api/product/:id', routesProduct)

// API ------ router events ---------
const routesEvent = require('./routes/event')
const routesEvents = require('./routes/events')

// API -------------- server routes events  ----------
app.use('/api/events', routesEvents)
app.use('/api/event', routesEvent)
app.use('/api/event/:id', routesEvent)

// route views

app.get('/', (req, res) => {
  const Product = require('./models/Product')
  const Event = require('./models/Event')

  const products = Product.find()
  const events = Event.find()

  Promise.all([products, events])
    .then(results => {
      const productsList = results[0]
      const eventsList = results[1]
      res.render('pages/index', {productsList, eventsList})
    })
})

module.exports = app
