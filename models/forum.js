const mongoose = require("mongoose");
const Schema = mongoose.Schema;
;

const forumSchema = new Schema({
  name: String,
  subject: String,
  img: String,
  
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }],
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});


module.exports = mongoose.model("Forum", forumSchema);
