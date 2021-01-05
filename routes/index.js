const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  // changed to public from build
  res.sendFiles(path.join(__dirname, "../client/build/index.html"));
});
