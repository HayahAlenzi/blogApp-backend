const mongoose = require("mongoose");


const followModel = new mongoose.Schema({
  userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'userModel'  },
  followers :[{ type: mongoose.Schema.Types.ObjectId, ref: 'userModel'  }] ,
  following :[{ type: mongoose.Schema.Types.ObjectId, ref: 'userModel'  }] ,

});


module.exports = mongoose.model("followModel", followModel);