const User = require("../models/user");

const index = (req, res) => {
  res.render("index", {
    user: req.user
  });
};

module.exports = {
    index,
   
  };
  