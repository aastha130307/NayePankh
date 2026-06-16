const Event = require("../models/Event");
const AppError = require("../utils/AppError");
const Volunteer = require("../models/Volunteer");
const catchAsync = require("../utils/catchAsync");

exports.createEvent = catchAsync(async(req,res,next)=>{
    const event = await Event.create(req.body);
    res.status(201).json({
        success: true,
        message : "Event created successfully!",
        event
    })
})

exports.getAllEvents = catchAsync(async(req,res,next)=>{
    const events = await Event.find();
    res.status(200).json({
        success:true,
        count : events.length,
        events
    })
})

exports.getEvent = catchAsync(async(req,res,next)=>{
const id = req.params.id;
const event = await Event.findById(id);
if(!event){
    return next(new AppError("No Event found!",404));
}
res.status(200).json({
    success:true,
    message:"Event fetched successfully",
    event
})
});

exports.updateEvent = catchAsync(async(req,res,next)=>{
    const id = req.params.id;
    const event = await Event.findById(id);
    if(!event){
    return next(new AppError("No Event found!",404));
    }
    if(event.status === "Completed" || event.status === "Cancelled"){
        return next(new AppError("Event can't be updated!",403));
    }
    const allowedFields = [
    "title",
    "date",
    "location",
    "description",
    "image",
    "category",
    "status",
  ];
  for(const field of allowedFields){
   if(req.body[field]!==undefined){
    event[field]=req.body[field];
   }
  }
  const updatedEvent = await event.save();
  res.status(200).json({
    success:true,
    message:"Event updated successfully!",
    updatedEvent
  })
})

exports.assignVolunteer = catchAsync(async(req,res,next)=>{
const id = req.params.id;
const {volunteerIds}= req.body;
const event = await Event.findById(id);
if(!event){
    return next(new AppError("Event doesn't exist",404));
}if(event.status==="Completed" || event.status ==="Cancelled"){
    return next(new AppError("You can't assign volunteers for this event",400));
}
if(!Array.isArray(volunteerIds) || volunteerIds.length==0){
    return next(new AppError("Please provide volunteer ids",400));
}
const volunteers= await Volunteer.find(
   {_id:{$in:volunteerIds}}
)

if(volunteers.length!==volunteerIds.length){
    return next(new AppError("One or more Volunteer Id is invalid!",404))
}

const result = await Volunteer.updateMany(
   { _id :{$in:volunteerIds}},
   {assignedEvent:id}
)

res.status(200).json({
    success:true,
    message:"Volunteers assigned successfully!",
    modifiedCount : result.modifiedCount
})
})

exports.getEventVolunteers = catchAsync(async(req,res,next)=>{
    const eventId = req.params.id;
    const event = await Event.findById(eventId);
    if(!event){
        return next(new AppError("Event does not exist!",404));
    }
    const volunteers = await Volunteer.find({assignedEvent:eventId});   
    res.status(200).json({
        success:true,
        count: volunteers.length,
        volunteers
    })
})