const mongoose = require("mongoose");
const db = require("../models");

// empties our User and Client Form collections and inserts the data below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/storiestold");

// const userSeed = [
//   {
//     username: "test1",
//     password: "password",
//   },
//   {
//     username: "test2",
//     password: "password",
//   },
//   {
//     username: "test3",
//     password: "Password",
//   },
// ];

const clientFormSeed = [
  {
    timeframe: "hella days",
    recipient: "Nana",
    pricerange: "expensive af",
    genre: "horror",
    size: "hella big",
    details: "this story better be amazing, yo.",
  },
  {
    timeframe: "test2",
    recipient: "test2",
    pricerange: "test2",
    genre: "test2",
    size: "test2",
    details: "test2",
  },
  {
    timeframe: "test3",
    recipient: "test3",
    pricerange: "test3",
    genre: "test3",
    size: "test3",
    details: "test3",
  },
];

// db.User.remove({})
//   .then(() => db.User.collection.insertMany(userSeed))
//   .then((data) => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

db.ClientForm.remove({})
  .then(() => db.ClientForm.collection.insertMany(clientFormSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
