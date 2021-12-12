const mongoose = require("mongoose");


const followModel = new mongoose.Schema({
  userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'userModel'  },
  followers :[{count:{type:Number} , follow:{ type: mongoose.Schema.Types.ObjectId, ref: 'userModel'  }   }],
  folowing :[{count:{type:Number} , folow :{ type: mongoose.Schema.Types.ObjectId, ref: 'userModel'  }   }],

});


module.exports = mongoose.model("followModel", followModel);