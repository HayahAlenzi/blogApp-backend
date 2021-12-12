const express = require("express");
const signUpRoute = express.Router();

const { addUser } = require("../controller/controlSignUp");

signUpRoute.post("/signUp", addUser);

module.exports = signUpRoute;