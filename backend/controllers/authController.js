const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

const sign_token=(id)=>{
    return jwt.sign(
        {id},
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN
        }
    );
};

exports.login = catchAsync(async(req,res,next)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return next(new AppError("Please provide email and password",400));
    }
    const admin = await Admin.findOne({email}).select("+password");
    if(!admin){
        return next (new AppError("Invalid credentials",401));
    }
    const isCorrect = bcrypt.compare(password,admin.password);
    if(!isCorrect){
        return next(new AppError("Invalid credentials",401));
    }
    const token = sign_token(admin._id);
    res.status(200).json({
        success:true,
        token,
        admin:{
            id:admin._id,
            name:admin.name,
            password:admin.email,
        }
    })
});

exports.getMe = catchAsync(async(req,res,next)=>{
res.status(200).json({
success : true,
admin : req.admin
})
});

exports.changePassword = catchAsync(async(req,res,next)=>{
const {currPassword,newPassword} = req.body;
if(!currPassword || !newPassword){
    return next(new AppError("Enter both currPassword and newPassword",400));
}
const admin = await Admin.findById(req.admin._id).select("+password");
const isCorrect = bcrypt.compare(currPassword,admin.password);
if(!isCorrect){
    return next(new AppError("Enter correct password!",401));
}

admin.password = await bcrypt.hash(newPassword,12);
await admin.save();
res.status(200).json({
    success:true,
    message:"Password updated successfully",
})
});