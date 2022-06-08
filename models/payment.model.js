const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
    {
        user_id: { type: mongoose.Types.ObjectId, ref: "User" },
        tutor_id: { type: mongoose.Types.ObjectId, ref: "User" },
        class_id: { type: mongoose.Types.ObjectId, ref: "Class" },
        price: { type: Number },
        date: { type: Date },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);