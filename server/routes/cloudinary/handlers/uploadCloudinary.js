const cloudinary = require('cloudinary')
const del = require('del')
const path = require('path')

const uploadFolderPath = path.join(global.__base, process.env.UPLOAD_FOLDER)

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

function uploadCloudinary (req, res, next) {
  if (req.file) {
    console.log(req.file, `: req.file => uploadCloudinary 😎`)
    cloudinary.uploader.upload(req.file.path, ({ url }) => {
      // console.log(req.file.path, `: req.file.path => 😢`)
      console.log(url, `: url => 😢`)
      if (url) {
        console.log(url, `: url => uploadCloudinary 👽`)
        req.imageLink = url
        // delete files inside folder but not the folder itself
        del.sync([`${uploadFolderPath}/**`, `!${uploadFolderPath}`])
        next()
      } else {
        res.status(404).send('Oh uh, something went wrong')
      }
    })
  } else {
    next()
  }
}

module.exports = uploadCloudinary
