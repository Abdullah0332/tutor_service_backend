import mongoose from "mongoose";

const tutorSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Types.ObjectId, ref: "User" },
    intro: { type: String },
    about_you: { type: String },
    email: { type: String },
    phone_number: { type: String },
    location: { type: String },
    education: {
      name_of_institution: { type: String },
      degree_title: { type: String },
      country: { type: String },
      city: { type: String },
      completion_year: { type: String },
    },
    experience: {
      teaching_place: { type: String },
      from_year: { type: String },
      to_year: { type: String },
      short_description: { type: String },
    },
    teach_language: [{ type: String }],
    teach_type: {
      type: String,
      enum: ["online", "tutor_home", "student_home"],
    },
    main_field: [{ type: String }],
    you_teach: [{ type: String }],
    level_you_teach: { type: String },
    student_age_you_teach: {
      from_age: { type: String },
      to_age: { type: String },
    },
    class_type: { type: String, enum: ["class", "group_class"] },
    gallery: [{ type: String }],
    pricing: {
      hourly_rate: { type: String },
      thirty_min_rate: { type: String },
      weekly_pkg_rate: { type: String },
      fortnightly_pkg_rate: { type: String },
      monthly_pkg_rate: { type: String },
      three_std_grp_rate: { type: String },
      five_std_grp_rate: { type: String },
      seven_std_grp_rate: { type: String },
    },
    payment_detail: [
      {
        name_on_card: { type: String },
        card_number: { type: String },
        exp_date: { type: String },
        cvv: { type: String },
      },
    ],
    bank_info: {
      SWIFT_code: { type: String },
      bank_name: { type: String },
      IBAN_number: { type: String },
      branch_name: { type: String },
      branch_address: { type: String },
      branch_account_type: { type: String },
      branch_on_account: { type: String },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tutor", tutorSchema);
