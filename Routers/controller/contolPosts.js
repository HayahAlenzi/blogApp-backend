const { populate } = require("../../DB/Models/postsModel");
const postModel = require("../../DB/Models/postsModel");
const userModel=require("../../DB/Models/userModel")



const getDataPosts= (req, res) => {

  postModel.find({}).populate("userId").sort('-date')
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
  
  const onePost=async(req,res) =>{
    const idPost = req.params.id;
    try {
      const Posts =await postModel.find({}).populate("userId")
      const foundOnePost= Posts.find(ele=>ele._id==idPost)
     
   res.status(200).json(foundOnePost)

    } catch (error) {
   res.send(error)
      
    }
  }
const getPostOneUser=async(req,res)=>{
  // const userId = req.token.userId;
   const userId = req.params.id;

  try {
    const blogs = await postModel.find({userId}).populate("userId").sort('-date')
   res.status(200).json(blogs)
} catch (error){
   res.send(error)
}
}
const getUserDetail= async(req,res)=>{
 
  const userId = req.token.userId;
  try {
    const userDetail =await postModel.find({userId}).populate("userId").sort('-date')
    console.log(userDetail);
    //هنا ناقص الوصول لسكيما الفولو
  res.status(200).json(userDetail)
  } catch (error) {
  res.send(error);
    
  }
}




const postDataPosts =async(req,res)=>{
    const { title,des,date,img} = req.body; 
    const userId = req.token.userId;
      const newPost = new postModel( { title,des,date,img,userId ,Comment:[]});

    
      try {
        const response = await newPost.save();
        // const response2=await newlistPost.save()
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
        
        
        const deletOnePost= await postModel.findOneAndDelete({ _id: id })
        const postsAfterdel=await postModel.find({userId}).populate("userId").sort('-date')
        console.log(postsAfterdel);
        res.status(201).json(postsAfterdel);
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
        
        
        
  const addLike =async(req,res)=>{
     const idPost = req.params.id;
     const userId = req.token.userId;
            try {
              const findUser= await userModel.findOneAndUpdate({_id:userId},
                { $push:{like:idPost}},{new:true}).populate("like")
              res.status(201).json(findUser);
        
            } catch (error) {
              res.send(error);
              
            }
            }
    
  const disLike=async(req,res)=>{
    const idPost = req.params.id;
    const userId = req.token.userId;
    console.log("dislikeeeeeeeeeeeeeeeeeeeee");
try {
  
    const findUser= await userModel.findOneAndUpdate({_id:userId},
       {$pull: {like:idPost}},{new:true}).populate("like")
              res.status(201).json(findUser);

} catch (error) {
  res.send(error);
  
}


  }
          
  const getLike=async(req,res)=>{
              const userId = req.token.userId;
              console.log(userId);
        try {
          const findLike= await userModel.findOne({_id:userId}).select("like").populate("like")
          res.status(200).json(findLike.like)
          
        } catch (error) {
          res.send(error);
          
        }
            }

  
  module.exports={
    getDataPosts,
    onePost,
    postDataPosts,
    deletePost,
    getPostOneUser,
    getUserDetail,
    addLike,
    disLike,
    getLike
  }