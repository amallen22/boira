const Product = require('../../models/Product')

function updateProduct (req, res) {
  // const id = +req.params.id
  // console.log('req: ' + req.params + ' |  res: ' + res)
  console.log(req.params)
  res.send('element w/ id ${id} has been updated')
}

module.exports = updateProduct

// const Task = require('../../../models/Task')

// function updateTask (req, res) {
//   const id = +req.params.id
//   const done = req.body.done === 'true'
//   const title = req.body.title
//   req.session.tasks = req.session.tasks.map(task => {
//     if (task.id === id) {
//       task.done = done
//       task.title = title || task.title
//     }
//     return task
//   })
//   res.send(`element w/ id ${id} has been updated`)
// }

// module.exports = updateTask
