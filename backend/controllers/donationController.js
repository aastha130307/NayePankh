const Donation = require("../models/Donation");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

exports.createDonation = catchAsync(async(req,res,next)=>{
const donation = await Donation.create(req.body);
res.status(201).json({
    success: true,
    message:"Donated successfully!",
    donation
})
});

exports.getDonations = catchAsync(async(req,res,next)=>{
    const totalDonations = await Donation.find();
    if(totalDonations.length===0){
    return next(new AppError("No Donations found!",404));
    }
    res.status(200).json({
        success:true,
        count: totalDonations.length,
        totalDonations
    })
})

exports.fetchDonation = catchAsync(async(req,res,next)=>{
    const id = req.params.id;
    const donation = await Donation.findById(id);
    if(!donation){
        return next(new AppError("Donation not found",404));
    }
    res.status(200).json({
        success:true,
        message:"Donation found successfully!",
        donation
    })
})