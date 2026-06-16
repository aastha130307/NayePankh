const mongoose = require("mongoose");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const validateObjectId = (param = "id") => (req,res,next)=>{
    const id = req.params[param];
    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(new AppError("Invalid Id Format", 400));
    }
    next();
}

const errorHandler = (err,req,res,next)=>{
console.error("ERROR:",err);
const statusCode = err.statusCode || 500;
const message = err.message || "Internal Server Error";
res.status(statusCode).json({
    success:false,
    message
})
};

const protect = catchAsync(async(req,res,next)=>{
let token;
if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    token = req.headers.authorization.split(" ")[1];
}
if(!token){
    return next(new AppError("You are not logged in.Please login first.",401));
}
try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return next(new AppError("Invalid or expired token", 401));
  }
const admin = await Admin.findById(decoded.id);
if(!admin){
    return next(new AppError("Admin no longer exists",401));
}
req.admin = admin;
next();
})

module.exports = {
    validateObjectId,
    errorHandler,
    protect
};