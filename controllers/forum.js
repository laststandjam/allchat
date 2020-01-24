const User = require("../models/user");
const Forum = require("../models/forums");

const index = (req, res) => {
  Forum.find({}, (err, forums) => {
   res.render("index", {
        forums,
        user: req.user
      });
    });
 
};
module.exports = {
  index
};
