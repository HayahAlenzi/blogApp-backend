require("./DB/db");
const express = require("express");

var cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());

///////////////////
const followRoute=require("./Routers/route/RouteFollow")
const RoutePosts = require("./Routers/route/RoutePosts");
const signUpRoute = require("./Routers/route/RouteSignUp");
const loginRoute  = require("./Routers/route/RouteLogin")
app.use(followRoute)
app.use(RoutePosts);
app.use(signUpRoute);
app.use(loginRoute);
// ////////////



/////


const { Server } = require("socket.io");
const Port = 5000;


const server = app.listen(Port, () => {
  console.log("SERVER IS RUN!");
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  // console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    // console.log(data,"data of send_message ");
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    // console.log("User Disconnected", socket.id);
  });
});





///////////////////
