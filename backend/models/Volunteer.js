const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
name : {type:String,required:true,trim:true},
email : {type:String,lowercase:true,required:true,trim:true},
phone : {type:String,required:true,trim:true},
age :{type:Number,required:true},
city :{type:String,required:true,trim:true},
skills:{type:String,required:true,trim:true},
availability:{type:String,enum:["Weekdays","Weekends","Both"],default:"Weekends"},
motivation:{type:String,trim:true},
status:{type:String,enum:["Approved","Rejected","Pending"],default:"Pending"},
assignedEvent:[{type:mongoose.Schema.Types.ObjectId,ref:"Event"}]
},{timestamps : true});

module.exports = mongoose.model("Volunteer",volunteerSchema);