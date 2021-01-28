// const mongoose = require("mongoose");
// const { ClientForm } = require("../models");
// const db = require("../models");

// empties our User and Client Form collections and inserts the data below

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/storiestold");

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

// db.User.remove({})
//   .then(() => db.User.collection.insertMany(userSeed))
//   .then((data) => {
//     console.log(data.result.n + " records inserted! user seed");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

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
//     console.log(data.result.n + " records inserted! client form seed");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

// db.User.find({})
//   .removeAsync()
//   .then(() => {
//     User.create(
//       {
//         username: "steve-o",
//         password: "password",
//       },
//       {
//         username: "brer",
//         password: "password",
//       }
//     );
//   });

// db.ClientForm.find({})
//   .removeAsync()
//   .then(() => {
//     ClientForm.create(
//       {
//         timeframe: "test3",
//         recipient: "test3",
//         pricerange: "test3",
//         genre: "test3",
//         size: "test3",
//         details: "test3",
//       },
//       {
//         timeframe: "test2",
//         recipient: "test2",
//         pricerange: "test2",
//         genre: "test2",
//         size: "test2",
//         details: "test2",
//       },
//       {
//         timeframe: "test1",
//         recipient: "test1",
//         pricerange: "test1",
//         genre: "test1",
//         size: "test1",
//         details: "test1",
//       }
//     );
//   });

const fs = require("fs");
const util = require("util");
const readDir = util.promisify(fs.readdir).bind(fs);
const path = require("path");
const mongoose = require("mongoose");

function toTitleCase(str) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

async function seedDataBase(runSaveMiddleware = false) {
  const dir = await readDir(__dirname);
  const seedFiles = dir.filter((f) => f.endsWith(".seed.js"));

  for (const file of seedFiles) {
    const fileName = file.split(".seed.js")[0];
    const modelName = toTitleCase(fileName);
    const model = mongoose.models[modelName];

    if (!model) throw new Error(`Cannot find Model ${modelName}`);
    const fileContents = require(path.join(__dirname, file));

    runSaveMiddleware
      ? await model.create(fileContents)
      : await model.insertMany(fileContents);
  }
}

exports.seedDataBase = seedDataBase;
