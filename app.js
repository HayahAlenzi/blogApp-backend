require("./DB/db");
const express = require("express");
var cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());




///////////////////

const RoutePosts = require("./Routers/route/RoutePosts");
const signUpRoute = require("./Routers/route/RouteSignUp");
const loginRoute  = require("./Routers/route/RouteLogin")
// app.use(coursesRoute);
// app.use(signUpRoute);
app.use(RoutePosts);
app.use(signUpRoute);
app.use(loginRoute);
// updateActive





///////////////////
const Port = 5000;
app.listen(Port, () => {
  console.log("SERVER IS RUN!");
});