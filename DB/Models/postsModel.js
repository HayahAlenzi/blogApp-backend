const mongoose = require("mongoose");


const postModel = new mongoose.Schema({
  title: { type: String, required: true },
  des: { type: String,  required: true  },
  date:{type:Date , default: Date.now },
  img: { type: String, required: true },
  flg:{type:Boolean},

  userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'postModel'  }
});


module.exports = mongoose.model("postModel", postModel);