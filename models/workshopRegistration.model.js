const mongoose = require("mongoose");

const workshopRegistrationSchema = mongoose.Schema(
  {
    workshop_id: { type: mongoose.Types.ObjectId, ref: "Workshop" },
    name_of_card: { type: String },
    card_number: { type: String },
    exp_date: { type: String },
    cvv: { type: String },
    email: { type: String },
    payment_status: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "WorkshopRegistration",
  workshopRegistrationSchema
);
