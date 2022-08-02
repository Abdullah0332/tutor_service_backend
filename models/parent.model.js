const mongoose = require("mongoose");

const parentSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Types.ObjectId, ref: "User" },
    type: { type: String, enum: ["parent", "individual"] },
    email: { type: String },
    phone_number: { type: String },
    location: { type: String },
    gender: { type: String },
    payment_detail: [
      {
        name_on_card: { type: String },
        card_number: { type: String },
        exp_date: { type: String },
        cvv: { type: String },
      },
    ],
    kids: [
      {
        first_name: { type: String },
        last_name: { type: String },
        age: { type: Number },
        gender: { type: String },
        class_name: { type: String },
        profile_picture: { type: String },
        educational: { type: String },
        grade: { type: String },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Parent", parentSchema);
