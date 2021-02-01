const router = require("express").Router();
const employeeFormsController = require("../../controllers/employeeFormsController");

// Matches with "/api/employee"
router
  .route("/")
  .get(employeeFormsController.findAll)
  .post(employeeFormsController.create);

module.exports = router;
