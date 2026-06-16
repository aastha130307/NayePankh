const {protect,validateObjectId} = require("../middlewares/middleware");
const {createContact,getContacts,fetchContact,replyToContact} = require("../controllers/contactController");
const express = require("express");
const router = express.Router();

router.route("/").post(createContact)
                 .get(protect,getContacts);

router.route("/:id").get(protect,validateObjectId,fetchContact)
                    .patch(protect,validateObjectId,replyToContact);

module.exports = router;