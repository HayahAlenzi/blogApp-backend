const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: { type: String },
  email: { type: String ,unique:true },
  password: { type: String },
  like:[{type: mongoose.Schema.Types.ObjectId, ref: 'postModel'  }],
  chatList:[{type: mongoose.Schema.Types.ObjectId, ref: 'userModel' }]

});

module.exports = mongoose.model("userModel", userModel);