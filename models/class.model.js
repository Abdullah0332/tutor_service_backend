const mongoose = require("mongoose");

const classSchema = mongoose.Schema(
  {
    name: { type: String },
    meet_link: { type: String },
    user_id: { type: mongoose.Types.ObjectId, ref: "User" },
    tutor_id: { type: mongoose.Types.ObjectId, ref: "User" },
    slotId: { type: mongoose.Types.ObjectId },
    slot_time: { type: Date },
    kids: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    user_type: { type: String },
    class_location: { type: String },
    selected_pkg: { type: Number },
    no_of_booking: { type: Number },
    price: { type: Number },
    travel_price: { type: Number },
    total_price: { type: Number },
    class_date: { type: String },
    completed: { type: Boolean, default: false },
    reviewed_by: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    time: {
      start_time: { type: String },
      end_time: { type: String }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Class", classSchema);
