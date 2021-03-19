require("dotenv").config();
const express = require("express");
// const routes = require("./routes");
const colors = require("colors");
// const connectDB = require("./config/db");
// const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

// Connect to the Mongo DB
// connectDB();

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));
}

// Add routes, both API and view
// app.use(routes);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/storiestold", {
//   useNewUrlParser: true,
// });
// app.use(notFound);
// app.use(errorHandler);

// Start the API server
app.listen(
  PORT,
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`.yellow.bold)
);
