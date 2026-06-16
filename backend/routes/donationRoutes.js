const {protect,validateObjectId} = require("../middlewares/middleware");
const express = require("express");
const router = express.Router();
const {createDonation,getDonations,fetchDonation,} = require("../controllers/donationController");

router.route("/").post(createDonation)
                 .get(protect,getDonations)

router.route("/:id").get(protect,validateObjectId,fetchDonation);

module.exports = router;