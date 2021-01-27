const router = require("express").Router();
const clientFormsController = require("../../controllers/clientFormsController");

// Matches with "/api/client"
router
  .route("/")
  .get(clientFormsController.findAll)
  .post(clientFormsController.create);

module.exports = router;
