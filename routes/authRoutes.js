const express = require("express");
const authcontroller = require("../controllers/authcontroller");
const routes = express.Router();

routes.post("/register", authcontroller.register);
routes.post("/login", authcontroller.login);

module.exports = routes;
