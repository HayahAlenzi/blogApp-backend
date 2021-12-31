const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const ChatModel = new mongoose.Schema({  

    userId :{   type: mongoose.Schema.Types.ObjectId, ref: 'userModel',required:true  }, 
    chatArr:[{  sender: { type:mongoose.Schema.Types.ObjectId, ref:'userModel', required:true },
                room  : { type:String,unique:true } ,
                msg   : { type:String,required:true},
                time  : { type:Date , default: Date.now() }}]

});

module.exports = mongoose.model("ChatModel", ChatModel);