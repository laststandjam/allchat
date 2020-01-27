const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  content: String
});

const forumSchema = new Schema({
  name: String,
  subject: String,
  comments: [{ commentSchema }],
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});


module.exports = mongoose.model("Forum", forumSchema);
