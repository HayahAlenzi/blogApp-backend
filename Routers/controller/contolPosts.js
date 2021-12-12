const { populate } = require("../../DB/Models/postsModel");
const postModel = require("../../DB/Models/postsModel");
const userModel=require("../../DB/Models/userModel")



const getDataPosts= (req, res) => {
  postModel.find({})
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }




const postDataPosts =async(req,res)=>{
    const { title,des,date,img} = req.body; 
    const userId = req.token.userId;

      const newPost = new postModel( { title,des,date,img});
    
      try {
        const response = await newPost.save();
        const post= await postModel.find({}).populate("userId")
        res.status(201).json(post);
      } catch (error) {
        res.status(403).json(error);
      }
      
    }



    // const postOneActive =async(req,res)=>{
    //   const {walaa}=req.body
    //   const userId = req.token.userId;
    //   // console.log(userId);
    //   // console.log(walaa,"aaaaa");
    // try {
    //   const findUser= await userModel.findOneAndUpdate({_id:userId},{ $push:{cart:walaa}},{new:true}).populate("cart")
  
    //   res.status(201).json(findUser);
    // } catch (error) {
      
    //   res.send(error);
      
    // }
    // }
    const deletePost=async (req, res) => {
      const id = req.params.id;
      const userId = req.token.userId;
      
      try {
        // const deleteOne = await userModel.findOneAndDelete({ _id: id });
        // const events = await userModel.find({});
        
        
        const deletOnePost= await userModel.findOneAndUpdate({ _id: userId },{
          $pull:{listPosts:id}
        },{new:true}).populate("listPosts")
        
        res.status(201).json(deletOnePost);
      } catch (error) {
        res.send(error);
      }
    };
    
    
    
    // const updetDataPoste = async (req, res) => {
    //   const id = req.params.id;
    //   try {
      //     const updateOne = await postModel.findOneAndUpdate(
        //       { _id: id },
        //       req.body,
        //       { new: true }
        //     );
        //     const event = await postModel.find({}).populate('userId');
        //     res.status(201).json(event);
        //   } catch (error) {
          //   }
          // };
          
          
          //     const getcart=async(req,res)=>{
          //       const userId = req.token.userId;
          //       console.log(userId);
          // try {
          //   const findCart= await userModel.find({_id:userId}).select("cart").populate("cart")
          //   res.status(200).json(findCart)
            
          // } catch (error) {
          //   res.send(error);
            
          // }
          //     }
          
          

  
  module.exports={
    getDataPosts,
    postDataPosts,
    deletePost,
   
  }