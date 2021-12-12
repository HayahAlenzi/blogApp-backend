const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: { type: String },
  email: { type: String ,unique:true },
  password: { type: String },
  listPosts:[{type: mongoose.Schema.Types.ObjectId, ref: 'postModel'  }],
  like:[{type: mongoose.Schema.Types.ObjectId, ref: 'postModel'  }]

});

module.exports = mongoose.model("userModel", userModel);