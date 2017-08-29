const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3022

const itemStore = require('./data/store.json')
console.log(itemStore)

// ------ mongoose url origin ---------
const URL_DB = 'mongodb://localhost:27017/boira'

// ------ mongoose allProducts require ---------
const allProducts = require('./server/handlers/allProducts')

// show html render nested
app.locals.pretty = true

// define static routes
const pathPublic = path.join(process.cwd(), 'client')
app.use(express.static(pathPublic))

// ------ mongoose ---------
mongoose.promise = Promise
mongoose.connect(URL_DB, {useMongoClient: true})

// ------ router ---------
const routesProducts = require('./server/routes/products')

// -------------- rutas server ----------
app.use('/store', routesProducts)

// BBDD call all products
app.get('/api/products', allProducts)

// --------- LOCAL API from JSON ---------
// app.get('/api', (req, res) => res.send(itemStore))

// listen to PORT
app.listen(PORT)
console.log('Run in port ' + PORT)
