const path = require('path')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3022

const pathPublic = path.join(process.cwd(), 'client')
app.use(express.static(pathPublic))

app.listen(PORT)
console.log('Run in port ' + PORT)
