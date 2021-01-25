const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    // console.log(req.query, "from the controller");
    // res.json({ test: "test" });
    db.User.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  signUp: function (req, res) {
    res.json(req.body);
  },
};
