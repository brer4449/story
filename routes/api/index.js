const router = require("express").Router();
const userRoutes = require("./users");
const clientFormRoutes = require("./clientForms");
const employeeFormRoutes = require("./employeeForms");

// User routes
router.use("/users", userRoutes);
router.use("/client", clientFormRoutes);
router.use("/employee", employeeFormRoutes);

module.exports = router;
