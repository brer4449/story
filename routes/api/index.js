const router = require("express").Router();
const userRoutes = require("./users");
const clientFormRoutes = require("./clientForms");

// User routes
router.use("/users", userRoutes);
router.use("/client", clientFormRoutes);

module.exports = router;
