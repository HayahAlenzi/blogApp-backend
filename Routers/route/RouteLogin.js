const express = require("express");
const loginRoute = express.Router();

const { login ,getUserDetail} = require("../controller/controlLogin");



loginRoute.post("/login", login);


module.exports = loginRoute;
