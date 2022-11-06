const express = require("express");
const UserController = require("../controllers/user");

const api = express.Router();

api.post("/signup", UserController.signUp);
api.post("/signup", UserController.signIn);

module.exports = api;