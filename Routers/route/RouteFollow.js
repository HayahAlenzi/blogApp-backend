const express = require("express");
const followRoute = express.Router();

const { addFollow } = require("../controller/contorlFollow");
const { authentication } = require("../middelwear/authentication");


followRoute.post("/addFollow/:id", authentication,addFollow);

module.exports = followRoute;