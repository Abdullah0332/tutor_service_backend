const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Types.ObjectId, ref: "User" },
    class_id: { type: mongoose.Types.ObjectId, ref: "Class" },
    message: { type: String },
    files: [{ type: String }],
    comments: [
      {
        user_id: { type: mongoose.Types.ObjectId, ref: "User" },
        name: { type: String },
        message: { type: String },
        files: [{ type: String }],
        time: { type: Date },
        // reply: [
        //     {
        //         user_id: { type: mongoose.Types.ObjectId, ref: "User" },
        //         name: { type: String, },
        //         message: { type: String, },
        //     },
        // ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Announcement", announcementSchema);
