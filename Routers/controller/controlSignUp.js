const bcrypt = require("bcrypt");
const userModel  = require("../../DB/Models/userModel")
const followModel =require("../../DB/Models/followModel")



const addUser = async(req, res) => {
  let { name, email, password } = req.body;
  try {
      password = await bcrypt.hash(password,10);
      const newUser = new userModel({ name, email, password,like:[],chatList:[]});
      const response1 = await newUser.save();


      const newFollower = new followModel({userId:response1._id,
        followers:[],
        following:[]})
        const response2  = await newFollower.save()

      

      res.status(201).json({response1,response2});
  } catch (error) {
      res.send(error)
  }
};

module.exports = { addUser };