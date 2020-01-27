var Forum = require('../models/forum')

const create = (req, res) => {
    console.log("hit")
  Forum.findById(req.params.id, (err, forum) => {
    forum.comments.push(req.body)
    forum.save(err => {
      res.redirect(`/forums/${forum._id}`)
    })
  })
}

module.exports = {
  create,
}