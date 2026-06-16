const Event = require("../models/Event");
const {createEvent,getAllEvents,getEvent,updateEvent,assignVolunteer,getEventVolunteers} = require("../controllers/eventController");
const express = require("express");
const router = express.Router();
const {protect,validateObjectId} = require("../middlewares/middleware");

router.route("/").post(protect,createEvent)
                 .get(getAllEvents)
                 
router.route("/:id").get(validateObjectId,getEvent)
                    .patch(protect,validateObjectId,updateEvent);

router.route("/:id/volunteers").get(protect,validateObjectId,getEventVolunteers)
                               .post(protect,validateObjectId,assignVolunteer);

module.exports = router;
                    
