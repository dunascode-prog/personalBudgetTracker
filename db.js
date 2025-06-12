const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const db = process.env.mongoURL.replace(
  "<db_password>",
  process.env.dataPassword
);

exports.connectdb = async () => {
  try {
    const con = await mongoose.connect(db);
    console.log("Database connected");
    return con;
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};
