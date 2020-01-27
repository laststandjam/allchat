  
const Fourm = require("../models/forum");
const Comment = require("../models/comment");

const create = async (req, res) => {
 
    const createComment = await Comment.create(req.body);
    const fourm = await Fourm.findById(req.params.id);
    fourm.comments.push(createComment);
    await fourm.save();
    res.redirect(`/forums/${fourm._id}`);
  
};

module.exports = {
  create
}