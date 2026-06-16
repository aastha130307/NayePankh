const Contact = require("../models/Contact");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

exports.createContact = catchAsync(async(req,res,next)=>{
const contact = await Contact.create(req.body);
res.status(201).json({
    success:true,
    message:"Message sent!",
    contact
})
})

exports.getContacts = catchAsync(async(req,res,next)=>{
    const contacts = await Contact.find().sort({createdAt:-1});
    res.status(200).json({
        success:true,
        count:contacts.length,
        contacts
    })
})

exports.fetchContact = catchAsync(async(req,res,next)=>{
    const id = req.params.id;
    const contact = await Contact.findById(id);
    if(!contact){
        return next(new AppError("Contact not found",404));
    }
    if(contact.status==="new"){
        contact.status="read";
        await contact.save();
    }
    res.status(200).json({
        success:true,
        message:"Contact found!",
        contact
    })
})

exports.replyToContact = catchAsync(async(req,res,next)=>{
    const id = req.params.id;
    const contact = await Contact.findById(id);
    if(!contact){
        return next(new AppError("Contact not found",404));
    }
    if(contact.status==="replied"){
        return next(new AppError("Already replied!",400));
    }
        const {reply} = req.body;
        if(!reply){
            return next(new AppError("Reply is required!",400));
        }
        contact.adminReply = reply;
        contact.status = "replied";
        await contact.save();
    
    res.status(200).json({
        success:true,
        message:"Admin replied",
        contact
    })
})
