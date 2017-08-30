const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3022

const itemStore = require('./data/store.json')
console.log(itemStore)

// ------ mongoose url origin ---------
const URL_DB = 'mongodb://localhost:27017/boira'

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

// ------ mongoose ---------
mongoose.promise = Promise
mongoose.connect(URL_DB, {useMongoClient: true})

// ------ router ---------
const products = require('./server/routes/products')

// -------------- rutas server middleware ----------
app.use('/api/products', products)

// --------- LOCAL API from JSON ---------
// app.get('/api', (req, res) => res.send(itemStore))

// listen to PORT
app.listen(PORT)
console.log('Run in port ' + PORT)
