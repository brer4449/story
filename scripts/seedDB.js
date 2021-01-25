const mongoose = require("mongoose");
const db = require("../models");

// empties our User collection and inserts the users below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/storiestold");

const userSeed = [
  {
    username: "test1",
    password: "password",
  },
  {
    username: "test2",
    password: "password",
  },
  {
    username: "test3",
    password: "Password",
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
