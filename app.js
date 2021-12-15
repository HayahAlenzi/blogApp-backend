require("./DB/db");
const express = require("express");
// const fileUpload=require("express-fileupload")
var cors = require('cors')
const app = express();

// app.use(fileUpload)
app.use(express.json());
app.use(cors());

// app.post("/uplod", (req ,res)=>{
// if(req.files===null){
//   return res.status(400).json({msg:'no file uploaded'})
// }

// const file =req.files.file
// file.mv(`${__dirname}/client/public/uploads/${file.name}`)
// if(err){
//   console.error(err)
//   return res.status(500).send(err)
// }

// res.json({fileName:file.name,filePath:`/uploads/${file.name}`})
// })


///////////////////
const followRoute=require("./Routers/route/RouteFollow")
const RoutePosts = require("./Routers/route/RoutePosts");
const signUpRoute = require("./Routers/route/RouteSignUp");
const loginRoute  = require("./Routers/route/RouteLogin")
app.use(followRoute)
app.use(RoutePosts);
app.use(signUpRoute);
app.use(loginRoute);
// updateActive





///////////////////
const Port = 5000;
app.listen(Port, () => {
  console.log("SERVER IS RUN!");
});