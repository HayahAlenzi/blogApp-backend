const mongoose = require("mongoose");

const ChatModel = new mongoose.Schema({  
    room   : { type:String } ,
    chatArr:[{ 
        //  recipient: { type:mongoose.Schema.Types.ObjectId, ref:'userModel', },
                userName :{type:String},
                userId   : {type: mongoose.Schema.Types.ObjectId, ref: 'userModel',required:true  }, 
                message: { type:String,required:true},
                time   : { type:String  }}]

});

module.exports = mongoose.model("ChatModel", ChatModel);