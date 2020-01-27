  
const Forum = require("../models/forum");
const Comment = require("../models/comment");

const create = async (req, res) => {
 
    const createComment = await Comment.create(req.body);
    const forum = await Forum.findById(req.params.id);
    forum.comments.push(createComment);
    await forum.save();
    res.redirect(`/forums/${forum._id}`);
  
};

module.exports = {
  create
}