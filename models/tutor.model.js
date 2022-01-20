const mongoose = require("mongoose");

const tutorSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Types.ObjectId, ref: "User" },
    intro: { type: String },
    about_you: { type: String },
    email: { type: String },
    phone_number: { type: String },
    gender: { type: String },
    location: { type: String },
    education: [
      {
        name_of_institution: { type: String },
        degree_title: { type: String },
        country: { type: String },
        city: { type: String },
        completion_year: { type: String },
        currently_enrolled: { type: Boolean },
      },
    ],
    experience: [
      {
        teaching_place: { type: String },
        from_year: { type: String },
        to_year: { type: String },
        short_description: { type: String },
        currently_working_here: { type: Boolean },
      },
    ],
    teach_language: [{ type: String }],
    // teach_type: {
    //   type: String,
    //   enum: ["online", "tutor_home", "student_home"],
    // },
    teach_type: [{ type: String }],
    main_field: { type: String },
    you_teach: [{ type: String }],
    level_you_teach: [{ type: String }],
    student_age_you_teach: [
      {
        from_age: { type: String },
        to_age: { type: String },
      },
    ],
    // class_type: { type: String, enum: ["class", "group_class"] },s
    class_type: [{ type: String }],
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
      offer_demo: { type: Boolean },
    },
    payment_detail: {
      name_on_card: { type: String },
      card_number: { type: String },
      exp_date: { type: String },
      cvv: { type: String },
    },

    bank_info: {
      SWIFT_code: { type: String },
      bank_name: { type: String },
      IBAN_number: { type: String },
      branch_name: { type: String },
      branch_address: { type: String },
      branch_account_type: { type: String },
      branch_on_account: { type: String },
    },
    schedule: {
      class_time: { type: String },
      availability_active: {
        from: { type: String },
        until: { type: String },
      },
      availability_time: [
        {
          name: { type: String },
          timings: [
            {
              start_time: { type: String },
              end_time: { type: String },
            },
          ],
        },
      ],
      book_class: [{ type: String }],
      buffer_and_time_setting: {
        before_class: { type: String },
        after_class: { type: String },
        short_notice: { type: String },
        future_book: { type: String },
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tutor", tutorSchema);
