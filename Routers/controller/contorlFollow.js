const followModel = require("../../DB/Models/followModel");
const userModel = require("../../DB/Models/userModel");

// const { title,des,date,img} = req.body;
// const userId = req.token.userId;
//   const newPost = new postModel( { title,des,date,img,userId});
//   // const newlistPost= new userModel.findOneAndUpdate({_id:userId},{ $push:{listPosts:{ title,des,date,img}}},{new:true}).populate("listPosts")

//   try {
//     const response = await newPost.save();
//     // const response2=await newlistPost.save()
//     const post= await postModel.find({}).populate("userId")
//     res.status(201).json(post);
//   } catch (error) {
//     res.status(403).json(error);
// const newlistPost= new userModel.findOneAndUpdate({_id:userId},{ $push:{listPosts:{ title,des,date,img}}},{new:true}).populate("listPosts")

// const finduser=  await userModel.findOne({userId})
// await new followModel({userId:finduser})
// // console.log(finduser);
// const newFollow= await new followModel({following: otherUser })
// console.log(newFollow,"mmmmmmm");
// const response = await newUser.save();
// const allFollow =await followModel.find({})
// res.status(201).json(allFollow);

const addFollow = async (req, res) => {
  const otherUser = req.params.id;
  const userId = req.token.userId;


  try {
      const userFollower = await followModel.findOne({userId:userId})
      if (userFollower === null){
          const newFollower = new followModel({userId:userId,
            followers:[],
            following:[]})
            const newSave  = await newFollower.save()
            const response = await followModel.findOneAndUpdate({userId:userId},
                {$push :{following :otherUser }}, {new:true} )
                res.status(201).json(response)
      }else{
        const response = await followModel.findOneAndUpdate({userId:userId},
            {$push :{following :otherUser }}, {new:true} )
            res.status(201).json(response)
      }
    
  } catch (error) {
    res.send(error);
  }
};

module.exports = { addFollow };
