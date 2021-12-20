const express = require("express");
const followRoute = express.Router();

const { addFollow ,getPostsofFollowing ,unFollow,findFollowArr ,getUserDetail} = require("../controller/contorlFollow");
const { authentication } = require("../middelwear/authentication");


followRoute.post("/addFollow/:id", authentication,addFollow);
followRoute.get("/postsofFollowing",authentication,getPostsofFollowing)
followRoute.put("/unFollow/:id",authentication,unFollow)
followRoute.get("/FollowArr", authentication,findFollowArr);

// followRoute.get("/getUserDetail",authentication, getUserDetail);



module.exports = followRoute;