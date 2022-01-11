const mongoose = require("mongoose");

const SendersModel = new mongoose.Schema({  
    userId   : {type: mongoose.Schema.Types.ObjectId, ref: 'userModel',required:true  },
    recipientsArr:[{ recipient: { type:mongoose.Schema.Types.ObjectId, ref:'userModel', }}]

});

module.exports = mongoose.model("SendersModel", SendersModel);