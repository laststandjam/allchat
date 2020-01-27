const User = require("../models/user");
const Forum = require("../models/forum");
const Comment = require("../models/comment")

const index = (req, res) => {
  Forum.find({}, (err, forums) => {
    if (err) {
      return res.redirect("/forums/new");
    } else {
      res.render("forums/index", {
        forums,
        user: req.user
      });
    }
  });
};
const newForum = (req, res) => {
  res.render("forums/new", { title: "Add Topic", user: req.user });
};
const create = (req, res) => {
  var forum = new Forum(req.body);
  forum.save(err => {
    if (err) return res.redirect("/forums/new");
    res.redirect(`/forums/${forum._id}`);
  });
};
const show = async (req, res) => {
  const forum = await Forum.findById(req.params.id).populate("comments");
  res.render("forums/show", {
    user: req.user,
    forum
  });
};
const deleteComment = (req, res) => {
  Forum.find({comments: req.params.id}, (err, forum)=>{
    console.log(forum)
    let array = forum[0].comments
    array.splice(array.indexOf(req.params.id), 1)
    forum[0].save()
    Comment.deleteOne({_id: req.params.id}, err=>{
      res.redirect(`/forums/${forum[0]._id}`)
    })
  } )
  }

module.exports = {
  index,
  new: newForum,
  create,
  show,
  delete: deleteComment
};
