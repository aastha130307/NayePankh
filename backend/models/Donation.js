const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
donorName : {type:String, required:true,trim:true},
donorEmail : {type:String, required:true,lowercase:true,trim:true},
donorNumber : {type:String, required:true,trim:true},
Amount : {type:Number, required:true, min:1},
purpose:{type:String, enum:["Animal Welfare","Education","Health","Food","Women's Hygiene","Other"],default:"Other"},
message : {type:String,required:true},
paymentStatus : {type:String,enum:["Completed","Pending","Filed"],default:"Completed"},
transactionId : {type:String,unique:true,required:true},
},{timestamps : true})

module.exports = mongoose.model("Donation",donationSchema);