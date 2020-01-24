const User = require("../models/user");
const Forum = require("../models/forums");

const index = (req, res) => {
  Forum.find({}, (err, forums) => {
    if (err) {
      return res.redirect("/forums/new");
    } else {
      res.render("forums/index", {
        forums
      });
      return console.log(forums);
    }
  });
};

module.exports = {
  index
};
