const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const db = require("../models");

// empties our User and Client Form collections and inserts the data below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/storiestold");

const userSeed = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
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

// const clientFormSeed = [
//   {
//     timeframe: "hella days",
//     recipient: "Nana",
//     pricerange: "expensive af",
//     genre: "horror",
//     size: "hella big",
//     details: "this story better be amazing, yo.",
//   },
//   {
//     timeframe: "test2",
//     recipient: "test2",
//     pricerange: "test2",
//     genre: "test2",
//     size: "test2",
//     details: "test2",
//   },
//   {
//     timeframe: "test3",
//     recipient: "test3",
//     pricerange: "test3",
//     genre: "test3",
//     size: "test3",
//     details: "test3",
//   },
// ];

// db.ClientForm.remove({})
//   .then(() => db.ClientForm.collection.insertMany(clientFormSeed))
//   .then((data) => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

const employeeFormSeed = [
  {
    email: "test1@test.com",
    requirement: "test1",
    rate: "expensive af",
  },
  {
    email: "test2@test.com",
    requirement: "test2",
    rate: "test2",
  },
  {
    email: "test3@test.com",
    requirement: "test3",
    rate: "test3",
  },
];

db.EmployeeForm.remove({})
  .then(() => db.EmployeeForm.collection.insertMany(employeeFormSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// using multiple seed files (the below code) https://zellwk.com/blog/seed-database/
// const fs = require("fs");
// const util = require("util");
// const readDir = util.promisify(fs.readdir).bind(fs);
// const path = require("path");
// const mongoose = require("mongoose");

// function toTitleCase(str) {
//   return str.replace(/\w\S*/g, (txt) => {
//     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//   });
// }

// console.log(readDir, "this is working");
// async function seedDataBase(runSaveMiddleware = false) {
//   const dir = await readDir(__dirname);
//   const seedFiles = dir.filter((f) => f.endsWith(".seed.js"));
//   for (const file of seedFiles) {
//     const fileName = file.split(".seed.js")[0];
//     const modelName = toTitleCase(fileName);
//     const model = mongoose.models[modelName];
//     // console.log(`Created seed for ${model}`);
//     if (!model) throw new Error(`Cannot find Model ${modelName}`);
//     const fileContents = require(path.join(__dirname, file));

//     runSaveMiddleware
//       ? await model.create(fileContents)
//       : await model.insertMany(fileContents);
//   }
// }

// exports.seedDataBase = seedDataBase;
