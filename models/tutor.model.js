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
    id_iqama_verification: { type: String },
    id_iqama_verification_approved: { type: String, default: 'pending', enum: ["pending", 'approved', 'declined'] },
    certificates: [{ type: String }],
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
    level_you_teach: [{ type: String, enum: ["Beginner", "Intermediate", "Advanced"] }],
    student_age_you_teach: [
      {
        from_age: { type: Number },
        to_age: { type: Number },
      },
    ],

    // class_type: { type: String, enum: ["class", "group_class"] },s
    class_type: [{ type: String }],
    gallery: [{ type: String }],
    pricing: {
      // hourly_rate: { type: Number },
      // thirty_min_rate: { type: Number },
      // weekly_pkg_rate: { type: Number },
      // fortnightly_pkg_rate: { type: Number },
      // monthly_pkg_rate: { type: Number },
      // three_std_grp_rate: { type: Number },
      // five_std_grp_rate: { type: Number },
      // seven_std_grp_rate: { type: Number },
      // offer_demo: { type: Boolean },
      // 4, 8 , 12 class package 
      four_class_rate: { type: Number },
      eight_class_rate: { type: Number },
      twelve_class_rate: { type: Number },
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
      // class_time: { type: String },
      class_time: [{ time: { type: String }, price: { type: Number } }],
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
          booked_slots: [{ type: Date }],
          booked: { type: Boolean, default: false },
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
    reviews: [
      {
        class_id: { type: mongoose.Types.ObjectId, ref: "Class" },
        user_id: { type: mongoose.Types.ObjectId, ref: "Users" },
        rating: { type: Number },
        comment: { type: String },
        files: [{ type: String }]
      },
    ],
    no_of_review: { type: Number, default: 0 },
    rating: { type: Number, default: 0, },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tutor", tutorSchema);
