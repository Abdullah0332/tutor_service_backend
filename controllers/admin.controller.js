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
    });

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
        ? await TutorModel.findOne({ user_id: id }).populate("user_id")
        : await ParentModel.findOne({ user_id: id }).populate("user_id");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};
