const {protect,validateObjectId} = require("../middlewares/middleware");
const  {login,getMe,changePassword}= require("../controllers/authController");
const express = require("express");
const router = express.Router();

router.post("/login",login)
router.get("/me", protect, getMe);
router.patch("/changePassword",protect,changePassword);

module.exports= router;