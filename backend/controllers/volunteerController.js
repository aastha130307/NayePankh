const Volunteer = require("../models/Volunteer");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

exports.registerVolunteer = catchAsync(async(req,res,next)=>{
    const {email} = req.body;
    const existingEmail = await Volunteer.findOne({email});
    if(existingEmail){
      return next(new AppError("Volunteer already exists",409));
    }
    const volunteer = await Volunteer.create(req.body);
    res.status(201).json({
        success:true,
        message:"Volunteer registered successfully",
        volunteer
    })
    })

exports.getVolunteers = catchAsync(async(req,res,next) =>{
    const filter = {};
    if(req.query.status)filter.status=req.query.status;
    if(req.query.skill){
        filter.skill = {$regex:req.query.skill,$options:"i"};
    }
    const volunteers = await Volunteer.find(filter).sort({createdAt:-1});
    if(volunteers.length===0){
        return next(new AppError("No Volunteer registered",404))
    }
    res.status(200).json({
        success:true,
        count:volunteers.length,
        volunteers
    })
})

exports.fetchVolunteer = catchAsync(async(req,res,next)=>{ 
    const volunteer = await Volunteer.findById(req.params.id);
    if(!volunteer){
        return next(new AppError("Volunteer doesn't exist",404));
    }
    res.status(200).json({
    success:true,
    message:"Volunteer fetched successfully",
    volunteer
    })
})

exports.updateVolunteer = catchAsync(async(req,res,next)=>{
    const id = req.params.id
    const volunteer = await Volunteer.findById(id);
    if(!volunteer){
        return next(new AppError("Volunteer doesn't esixt",404));
    }
    const allowedFields = [
    "name",
    "email",
    "phone",
    "age",
    "city",
    "skills",
    "availability",
    "motivation",
    "status",
    "assignedEvent",
  ];

    for(const field of allowedFields){
        if(req.body[field]!==undefined){
            volunteer[field]=req.body[field];
        }
    }
    const updatedVolunteer=await volunteer.save();
    res.status(200).json({
        success:true,
        message:"Volunteer  updated successfully!",
        updatedVolunteer
    })
});

exports.deleteVolunteer = catchAsync( async(req,res,next)=>{
const id = req.params.id;
const deletedVolunteer = await Volunteer.findByIdAndDelete(id);
if(!deletedVolunteer){
    return next(new AppError("Volunteer not found",404));
}
res.status(200).json({
    success: true,
    message:"Volunteer deleted successfully",
    deletedVolunteer
})
})


