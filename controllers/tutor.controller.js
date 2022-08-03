const UserModel = require("../models/user.model.js");
const TutorModel = require("../models/tutor.model.js");
const ClassModel = require("../models/class.model.js");
const AnnouncementModel = require("../models/announcement.model.js");
const PaymentModel = require("../models/payment.model");
const APIFilter = require("../libraries/apiFilter.js");
const moment = require("moment");

const {
  update_tutor_profile_service,
} = require("../services/tutor.service.js");

// ---------------------------------------------------------------
// --------------------- UPDATE TUTOR PROFILE -----------------------------
// ---------------------------------------------------------------
exports.update_tutor_profile = async (req, res, next) => {
  try {
    const { update_tutor_object, update_user_object } =
      await update_tutor_profile_service(req);

    await TutorModel.updateOne(
      { user_id: req?.user?._id },
      { $set: update_tutor_object }
    );

    await UserModel.updateOne(
      { _id: req?.user?._id },
      { $set: update_user_object }
    );

    const data = await TutorModel.findOne({ user_id: req?.user?._id });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- LIST OF ALL TUTORS -----------------------------
// ---------------------------------------------------------------
exports.list_of_tutors = async (req, res, next) => {
  try {
    // const data = await TutorModel.aggregate([
    //   {
    //     $lookup: {
    //       from: "users",
    //       localField: "user_id",
    //       foreignField: "_id",
    //       as: "user_profile",
    //     },
    //   },
    //   {
    //     $unwind: {
    //       path: "$user_profile",
    //     },
    //   },
    // ]);

    const filtered_data = await new APIFilter(
      TutorModel.find({ id_iqama_verification_approved: "approved" }).populate(
        "user_id"
      ),
      req.query
    )
      .querySearch()
      .teach_language()
      .gender()
      .main_field()
      .sub_field()
      .level_you_teach()
      .location()
      .age()
      .classLocation()
      .price();

    let data = await filtered_data.document;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- UPDATE TUTOR SCHEDULE -----------------------------
// ---------------------------------------------------------------
exports.update_tutor_schedule = async (req, res, next) => {
  try {
    const {
      soltId,
      kids,
      user_type,
      class_location,
      selected_pkg,
      no_of_booking,
      price,
      travel_price,
      total_price,
      slot_time,
      start_time,
      end_time,
    } = req.body;
    const { id } = req.params;
    const tutor = await TutorModel.findOne({ user_id: id });
    const updated_availability_time = tutor.schedule.availability_time.filter(
      (availabile) => {
        if (availabile._id.toString() === soltId.toString()) {
          availabile.booked = true;
          availabile.booked_slots.push(slot_time);
        }
        return availabile;
      }
    );
    tutor.schedule.availability_time = updated_availability_time;
    tutor.save();

    // Create Booking
    const new_class = await ClassModel.create({
      user_id: req?.user?.id,
      tutor_id: req?.params?.id,
      kids,
      user_type,
      class_location,
      selected_pkg,
      no_of_booking,
      price,
      travel_price,
      total_price,
      slot_time,
      start_time,
      end_time,
      class_date: moment(req.body?.date).format("YYYY-MM-DD"),
    });

    await PaymentModel.create({
      user_id: req?.user?.id,
      tutor_id: req?.params?.id,
      class_id: new_class?._id,
      price: total_price,
      date: new Date(),
    });

    const updated_tutor_profile = await TutorModel.findOne({
      user_id: id,
    }).populate("user_id");
    res.status(200).json(updated_tutor_profile);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- SINGLE TUTOR -----------------------------
// ---------------------------------------------------------------
exports.get_single_tutor = async (req, res, next) => {
  try {
    const data = await TutorModel.findOne({
      user_id: req?.params?.id,
    }).populate("user_id");

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- UPLOAD ID OR IQAMA VERIFICATION -----------------------------
// ---------------------------------------------------------------
exports.upload_id_iqama_verification = async (req, res, next) => {
  try {
    await TutorModel.updateOne(
      {
        user_id: req?.params?.id,
      },
      { $set: { id_iqama_verification: req.file.path } }
    );

    const data = await TutorModel.findOne({
      user_id: req?.params?.id,
    }).populate("user_id");

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- UPLOAD CERTIFICATIONS -----------------------------
// ---------------------------------------------------------------
exports.upload_certifications = async (req, res, next) => {
  try {
    const { _id } = req?.user;
    let certifications_path = req.files.map(({ path }) => path);
    let tutor = await TutorModel.findOne({
      user_id: _id,
    });
    tutor.certificates.push(...certifications_path);

    await tutor.save();

    const data = await TutorModel.findOne({
      user_id: _id,
    }).populate("user_id");

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};
