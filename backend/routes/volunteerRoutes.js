const {registerVolunteer,getVolunteers,fetchVolunteer,updateVolunteer,deleteVolunteer} = require("../controllers/volunteerController");
const express = require("express");
const router = express.Router();
const {protect,validateObjectId} = require("../middlewares/middleware");

router.route("/").post(registerVolunteer)
                 .get(protect,getVolunteers);

router.route("/:id").get(protect,validateObjectId,fetchVolunteer)
                    .patch(protect,validateObjectId,updateVolunteer)
                    .delete(protect,validateObjectId,deleteVolunteer);

module.exports = router;

