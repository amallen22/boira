const path = require('path')
const PORT = process.env.PORT || 3022

global.__base = __dirname + '/server'
require('dotenv').load()

const app = require('./server/app')

// listen to PORT
app.listen(PORT)
console.log('Run in port ' + PORT)
