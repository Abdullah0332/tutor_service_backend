const mongoose = require("mongoose");

const workshopSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Types.ObjectId, ref: "User" },
    title: { type: String },
    date: { type: String },
    total_seats_available: { type: Number },
    price_per_seat: { type: String },
    language_of_workshop: { type: String },
    online_workshop: { type: Boolean, default: false },
    organizer_name: { type: String },
    contact_information: {
      contact_name: { type: String },
      contact_email: { type: String },
      phone_number: { type: String },
    },
    gallery: [{ type: String }],
    emails: [{ type: String }],
    registration_ids: [
      { type: mongoose.Types.ObjectId, ref: "WorkshopRegistration" },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workshop", workshopSchema);
