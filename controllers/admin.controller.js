const UserModel = require("../models/user.model.js");
const TutorModel = require("../models/tutor.model.js");
const ParentModel = require("../models/parent.model.js");

exports.block_unblock_user = async (req, res, next) => {
  try {
    const { user_type, status, id } = req.body;
    await UserModel.updateOne({ _id: id }, { $set: { active: status } });

    // send email
    res.status(200).json({
      message: `User ${
        status === "true" ? "active" : "blocked"
      } successfully!!!`,
    });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

exports.all_users_by_status = async (req, res, next) => {
  try {
    const { user_type, status } = req.query;

    const data = await UserModel.find({
      $and: [
        { active: status },
        {
          user_type: {
            $in: user_type === "tutor" ? ["tutor"] : ["parent", "individual"],
          },
        },
      ],
    }).sort({ createdAt: -1 });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

exports.get_single_user = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    const data =
      user?.user_type === "tutor"
        ? await TutorModel.findOne({ user_id: id })
        : await ParentModel.findOne({ user_id: id });
    res.status(200).json({ ...user.toObject(), data });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

exports.update_admin_password = async (req, res, next) => {
  try {
    const { password } = req.body;

    const user = await UserModel.findById(req?.user?._id);

    user.password = password;
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

exports.update_admin_profile = async (req, res, next) => {
  try {
    const { first_name, last_name } = req.body;
    console.log(req.body);
    let user_object = {};
    if (first_name) {
      user_object.first_name = first_name;
    }

    if (last_name) {
      user_object.last_name = last_name;
    }

    if (req?.file) {
      user_object.profile_pic = req?.file?.path;
    }

    await UserModel.updateOne({ _id: req?.user?.id }, { $set: user_object });

    res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

exports.counts = async (req, res, next) => {
  try {
    let parents = await UserModel.countDocuments({
      user_type: { $in: ["parent", "individual"] },
    });
    let tutors = await UserModel.countDocuments({ user_type: "tutor" });
    res.status(200).json({ parents, tutors });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};
