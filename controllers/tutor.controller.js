const UserModel = require("../models/user.model.js");
const TutorModel = require("../models/tutor.model.js");
const APIFilter = require("../libraries/apiFilter.js");

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
    console.log(error);
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
      TutorModel.find().populate("user_id"),
      req.query
    )
      .tutor_language()
      .main_field()
      .level_you_teach()
      .location();

    let data = await filtered_data.document;

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
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
