const mongoose = require("mongoose");

const chatRoomSchema = mongoose.Schema(
  {
    tutor_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    class_id: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
    new: [{ type: String }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("ChatRoom", chatRoomSchema);
