const mongoose = require("mongoose");

const classSchema = mongoose.Schema(
    {
        user_id: { type: mongoose.Types.ObjectId, ref: "User" },
        tutor_id: { type: mongoose.Types.ObjectId, ref: "User" },
        slotId: { type: mongoose.Types.ObjectId },
        kids: [{ type: mongoose.Types.ObjectId }],
        user_type: { type: String, },
        class_location: { type: String },
        selected_pkg: { type: Number },
        no_of_booking: { type: Number },
        price: { type: Number },
        travel_price: { type: Number },
        total_price: { type: Number },
        class_date: { type: String }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Class", classSchema);
