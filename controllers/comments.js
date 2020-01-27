  
const Forum = require("../models/forum");
const Comment = require("../models/comment");

const create = async (req, res) => {
 
    console.log(req.body)
    const createComment = await Comment.create(req.body);
    console.log(createComment)
    const forum = await Forum.findById(req.params.id);
    console.log(forum)
    forum.comments.push(createComment);
    await forum.save();
    res.redirect(`/forums/${forum._id}`);
};
const deleteComment = (req, res) => {
  console.log("hit delete")
  Headline.findOneAndDelete(req.params.id, (err) => {
    res.redirect(`/forums/${forum._id}`);  })
}
module.exports = {
  create,
  delete: deleteComment
}