const { type } = require("express/lib/response");
const mongoose = require("mongoose");


const postModel = new mongoose.Schema({
  title: { type: String, required: true },
  des: { type: String,  required: true  },
  date:{type:Date , default: Date.now },
  img: { type: String, required: true },
  flg:{type:Boolean},
  // Comment:[],
  userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'userModel'  }
  
});


module.exports = mongoose.model("postModel", postModel);