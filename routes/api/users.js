const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/").get(usersController.findAll);
router.route("/").post(usersController.signUp);

module.exports = router;
