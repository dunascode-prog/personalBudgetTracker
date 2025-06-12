/* eslint-disable prettier/prettier */
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userModel = require("./models/userModels");
const transactionModel = require("./models/transactionModels");

const users = require("./users.js");
const transactions = require("./transactions.js");
// eslint-disable-next-line import/extensions

dotenv.config({ path: "./config.env" });

const DB = process.env.mongoURL.replace(
  "<db_password>",
  process.env.dataPassword
);
mongoose.connect(DB).then((con) => {
  //console.log(con.connections);
  console.log("DB connection successful");
});

const importData = async () => {
  try {
    await userModel.create(users);
    await transactionModel.create(transactions);
    console.log("Data successfully read");
  } catch (err) {
    console.log(err);
  } finally {
    process.exit(); //because this is an async function if it is put in the if statement the process.exit can be executed first before the main delete function
  }
};

const deleteData = async () => {
  try {
    await userModel.deleteMany();
    await transactionModel.deleteMany();
    console.log("Data successfully deleted");
  } catch (err) {
    console.log(err);
  } finally {
    process.exit(); //because this is an async function if it is put in the if statement the process.exit can be executed first before the main delete function
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
