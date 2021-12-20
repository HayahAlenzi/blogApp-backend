const express = require("express");
const postModel = express.Router();

const { getDataPosts, postDataPosts ,deletePost, getPostOneUser,getUserDetail,updetDataPoste} = require("../controller/contolPosts");
const { authentication } = require("../middelwear/authentication");

postModel.get("/userPosts/:id",getPostOneUser)
postModel.get("/dataPosts",getDataPosts);
postModel.post("/dataPosts", authentication,postDataPosts);
postModel.delete("/deletOnePost/:id", authentication,deletePost);
postModel.get("/getUserDetail",authentication, getUserDetail);

// postModel.put("/oneEvent",authentication,updetDataPoste)
// postModel.get("/oneEvent",authentication,getcart)


module.exports = postModel;