const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
title:{type:String,required:true,trim:true},
date : {type:Date,required:true},
location:{type:String,required:true,trim:true},
description:{type:String,required:true,trim:true},
image:{type:String},
category:{type:String,enum:["Workshop","Fundraiser","Health Camp","Education Drive","Awareness Campaign","Other"],default:"Other"},
status: {type:String,enum:["Upcoming","Ongoing","Completed","Cancelled"],default:"Upcoming"},
createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
},{timestamps : true});

module.exports = mongoose.model("Event",eventSchema);