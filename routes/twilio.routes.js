const express = require("express");
const sanitizeData = require("../middlewares/sanitize.js");
const { auth } = require("../middlewares/auth.js");
const { file } = require("../middlewares/multer.js");

const {
  createChatToken,
  getUserChatRoom,
  getSingleChatRoom,
  updateChatRoom
} = require("../controllers/twilio.controller");

const router = express.Router();

router.get("/create-chat-token", auth, sanitizeData, createChatToken);

router.get("/get-user-chat-rooms", auth, sanitizeData, getUserChatRoom);

router.get("/get-single-chat-room/:id", auth, sanitizeData, getSingleChatRoom);

router.put("/update-chat-room/:id", auth, sanitizeData, updateChatRoom);

module.exports = router;
