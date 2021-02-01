const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    // console.log(req.query, "from the employee controller");
    db.EmployeeForm.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.EmployeeForm.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
