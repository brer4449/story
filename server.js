const express = require("express");
const routes = require("./routes");
require("dotenv").config();
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const db = require("./firebase");

// console.log(db);
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
}

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
