const ChatModel = require("../../DB/Models/ChatModel");
const followModel = require("../../DB/Models/followModel");
const postsModel = require("../../DB/Models/postsModel");
const userModel = require("../../DB/Models/userModel");

const unFollow = async (req, res) => {
  const otherUser = req.params.id;
  const userId = req.token.userId;
  console.log("hi");
  try {
    const unFollow = await followModel.findOne({ userId: userId });
    const unFollowimg = await followModel.findOneAndUpdate(
      { userId: userId },
      { $pull: { following: otherUser } },
      { new: true }
    );

    const unFollower = await followModel.findOneAndUpdate(
      { userId: otherUser },
      { $pull: { followers: userId } },
      { new: true }
    );
    // res.status(200).json("hi")

    res.status(200).json({ unFollowimg, unFollower });
  } catch (error) {
    res.send(error);
  }
};
const addFollow = async (req, res) => {
  const otherUser = req.params.id;
  const userId = req.token.userId;

  try {
    const Follow = await followModel.findOne({ userId: userId });
    console.log(Follow, "Followwwwww");
    const makeFollowimg = await followModel.findOneAndUpdate(
      { userId: userId },
      { $push: { following: otherUser } },
      { new: true }
    );

    const makeFollower = await followModel.findOneAndUpdate(
      { userId: otherUser },
      { $push: { followers: userId } },
      { new: true }
    );

    res.status(201).json({ makeFollowimg, makeFollower });
  } catch (error) {
    res.send(error);
  }
};

// if (userFollower === null){
//   const newFollower = new followModel({userId:userId,
//     followers:[],
//     following:[]})
//     const savenewFollower  = await newFollower.save()
// }else{
//   const response = await followModel.findOneAndUpdate({userId:userId},
//       {$push :{following :otherUser }}, {new:true} )
//       res.status(201).json(response)
const getPostsofFollowing = async (req, res) => {
  const userId = req.token.userId;

  try {
    const followingOj = await followModel
      .findOne({ userId: userId })
      .select("following -_id")
      .populate("userId");
    const followingArr = followingOj.following; //my profaileهذا اللاين يفيديني بقايمة الفولونق تبع
    console.log(followingArr);
    const response = await postsModel
      .find({ userId: { $in: followingArr } })
      .sort("-date");
    // const followingOj=await followModel.findOne({userId:userId}).select("following -_id").populate("userId")
    // const followingArr=followingOj.following
    // console.log(followingArr);
    // const showFollowing=[]
    // for (let i = 0; i < followingArr.length; i++) {
    //   console.log(followingArr[i],"it'sfollowin iiiiiiiiiiiiiiiiii");
    //   const x=await postsModel.find({userId:followingArr[i]})
    //   showFollowing.push(x)
    //   console.log(x,"it's x");
    res.status(200).json(response);
  } catch (error) {
    res.send(error);
  }
};
// const getUserDetail= async(req,res)=>{

//   const userId = req.token.userId;

//   try {
//     const userDetail =await postModel.find({userId})
//     console.log(userDetail);
//   res.status(200).json(userDetail)

//   } catch (error) {
//   res.send(error);

//   }
// }
const findFollowArr = async (req, res) => {
  // const otherUser = req.params.id;
  const userId = req.token.userId;
  const Follow = await followModel
    .findOne({ userId: userId })
    .populate("userId")
    .populate("followers")
    .populate("following");
  // if(Follow)
  res.status(200).json(Follow);
};


const getChat= async(req,res)=>{
  console.log("iiiiiiiiiiiiiiiiiiii");
  const room = req.params.id;
// console.log(room,"ooooo");
try {
  const getMag= await ChatModel.findOne({room:room})
  res.status(200).json(getMag);

} catch (error) {
  res.send(error);
  
}
}

const saveChat = async (req, res) => {
  const userId = req.token.userId;
  const { room, message, userName,recipientId,recipientName ,time } = req.body;
  console.log(recipientId,"recipientiiii");
  // console.log(recipientName,"recipientnnnnn");

  const objchatList={recipientId,recipientName}
  const objChat = { userId, message,userName,time };

  try {
    
    const x=await userModel.findOne({_id:userId}).select("chatList")
    console.log(x.chatList,"xxxxxxx");
    const result=x.chatList.filter((elem)=>{
      return recipientId==elem
    })
console.log(result,"rrrrrrrr");

if(result.length==0){
  const foundRecipient=await userModel.findOneAndUpdate({_id:userId}, { $push: { chatList:objchatList  } })


}
 
    const foundRoom = await ChatModel.findOne({ room: room });

    if (foundRoom == null) {
      // console.log("it's in");
      const newChat = new ChatModel({ room: room, chatArr: [objChat] });
      // console.log(newChat, "newChat");
      const response = await newChat.save();
      res.status(200).json(response);
    } else {
      const updetChat = await ChatModel.findOneAndUpdate(
        { room: room },
        { $push: { chatArr: objChat } },
        { new: true }
      );
      res.status(201).json(updetChat);
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  addFollow,
  getPostsofFollowing,
  unFollow,
  findFollowArr,
  saveChat,
  getChat
};
