const mongoose = require("mongoose");

const fcmTokenSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Types.ObjectId, ref: "User" },
    fcm_token: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("FcmToken", fcmTokenSchema);
