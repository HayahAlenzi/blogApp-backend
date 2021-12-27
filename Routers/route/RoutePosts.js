const express = require("express");
const postModel = express.Router();

const { getDataPosts, postDataPosts ,deletePost, getPostOneUser,getUserDetail, addLike,disLike,
    getLike,updetDataPoste} = require("../controller/contolPosts");
const { authentication } = require("../middelwear/authentication");

postModel.get("/userPosts/:id",getPostOneUser)
postModel.get("/dataPosts",getDataPosts);
postModel.post("/dataPosts", authentication,postDataPosts);
postModel.delete("/post/:id", authentication,deletePost);
postModel.get("/getUserDetail",authentication, getUserDetail);
postModel.post("/likedPosts/:id",authentication, addLike);
postModel.put("/dislike/:id",authentication, disLike);

postModel.get("/likedPosts", authentication,getLike);

// postModel.put("/oneEvent",authentication,updetDataPoste)
// postModel.get("/oneEvent",authentication,getcart)


module.exports = postModel;