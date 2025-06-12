const mongoose = require("mongoose");

const users = [
  {
    _id: new mongoose.Types.ObjectId("665f56c7b66a4b7b1f1a1a01"),
    name: "Alice Johnson",
    email: "alice@example.com",
    password: "password123",
  },
  {
    _id: new mongoose.Types.ObjectId("665f56c7b66a4b7b1f1a1a02"),
    name: "Bob Smith",
    email: "bob@example.com",
    password: "passbob123",
  },
  {
    _id: new mongoose.Types.ObjectId("665f56c7b66a4b7b1f1a1a03"),
    name: "Carol White",
    email: "carol@example.com",
    password: "carolpass",
  },
  {
    _id: new mongoose.Types.ObjectId("665f56c7b66a4b7b1f1a1a04"),
    name: "David Brown",
    email: "david@example.com",
    password: "david1234",
  },
  {
    _id: new mongoose.Types.ObjectId("665f56c7b66a4b7b1f1a1a05"),
    name: "Eve Black",
    email: "eve@example.com",
    password: "evepass",
  },
  {
    _id: new mongoose.Types.ObjectId("665f56c7b66a4b7b1f1a1a06"),
    name: "Frank Green",
    email: "frank@example.com",
    password: "frank2023",
  },
  {
    _id: new mongoose.Types.ObjectId("665f56c7b66a4b7b1f1a1a07"),
    name: "Grace Lee",
    email: "grace@example.com",
    password: "gracepwd",
  },
  {
    _id: new mongoose.Types.ObjectId("665f56c7b66a4b7b1f1a1a08"),
    name: "Hank Hill",
    email: "hank@example.com",
    password: "hanksecure",
  },
  {
    _id: new mongoose.Types.ObjectId("665f56c7b66a4b7b1f1a1a09"),
    name: "Ivy Scott",
    email: "ivy@example.com",
    password: "ivy123",
  },
  {
    _id: new mongoose.Types.ObjectId("665f56c7b66a4b7b1f1a1a10"),
    name: "Jake Paul",
    email: "jake@example.com",
    password: "jakepass",
  },
];

module.exports = users;
