const express = require("express");
const postModel = express.Router();

const { getDataPosts, postDataPosts ,deletePost,updetDataPoste} = require("../controller/contolPosts");
const { authentication } = require("../middelwear/authentication");


postModel.get("/dataPosts",getDataPosts);
postModel.post("/dataPosts", authentication,postDataPosts);
postModel.delete("/deletOnePost/:id", authentication,deletePost);
// postModel.put("/oneEvent",authentication,updetDataPoste)
// postModel.get("/oneEvent",authentication,getcart)


module.exports = postModel;