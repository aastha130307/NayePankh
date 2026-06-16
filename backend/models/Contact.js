const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
name : {type:String,required:true,trim:true},
email : {type:String,lowercase:true,required:true,trim:true},
phone : {type:String,required:true,trim:true},
message :{type:String,required:true,trim:true},
subject:{type:String,required:true},
status:{type:String,enum:["new","read","replied"],default:"new"},
adminReply:{type:String,default:""},
repliedAt:{type:Date},
},{timestamps : true});

module.exports = mongoose.model("Contact",contactSchema);