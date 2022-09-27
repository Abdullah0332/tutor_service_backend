const UserModel = require("../models/user.model.js");
const ParentModel = require("../models/parent.model.js");
const TutorModel = require("../models/tutor.model.js");
const { filteredFCMTokens, sendNotification } = require("../libraries/pushNotification.js");
const notificationModel = require("../models/notification.model.js");

// ---------------------------------------------------------------
// --------------------- UPDATE USER NAME -----------------------------
// ---------------------------------------------------------------
exports.update_user_name = async (req, res, next) => {
  try {
    const { first_name, last_name } = req.body;
    let update_obj = {};

    if (first_name) update_obj.first_name = first_name;
    if (last_name) update_obj.last_name = last_name;

    await UserModel.updateOne({ _id: req.user?.id }, { $set: update_obj });

    const user = await UserModel.findById(req.user.id);

    // let filtered_tokens = await filteredFCMTokens(user?._id);
    // if (filtered_tokens?.length > 0) {
    //   await sendNotification({
    //     title: `Name Updated`,
    //     body: `Name ${user?.first_name} ${user?.last_name} Updated Successfully.`,
    //     userTokens: filtered_tokens
    //   });
    // }

    await notificationModel.create({
      user_id: user?._id,
      type: "view",
      title: `Name Updated`,
      body: `Name ${user?.first_name} ${user?.last_name} Updated Successfully.`,
      status: "unread",
    })

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- UPDATE USER PERSONAL INFO -----------------------------
// ---------------------------------------------------------------
exports.update_user_personal_info = async (req, res, next) => {
  try {
    const { email, phone_number, location } = req.body;
    let user_obj = {};
    let update_obj = {};

    if (email) user_obj.email = email;
    if (email) update_obj.email = email;
    if (phone_number) update_obj.phone_number = phone_number;
    if (location) update_obj.location = location;

    await UserModel.updateOne({ _id: req.user?.id }, { $set: user_obj });
    if (req?.user?.user_type === "tutor") {
      await TutorModel.updateOne(
        { user_id: req.user?.id },
        { $set: update_obj }
      );
    } else {
      await ParentModel.updateOne(
        { user_id: req.user?.id },
        { $set: update_obj }
      );
      }
      
    // let filtered_tokens = await filteredFCMTokens(req?.user?._id);
    // if (filtered_tokens?.length > 0) {
    //   await sendNotification({
    //     title: `Profile Updated`,
    //     body: `Profile Updated Successfully.`,
    //     userTokens: filtered_tokens
    //   });
    // }

    await notificationModel.create({
      user_id: req?.user?._id,
      type: "view",
      title: `Profile Updated`,
      body: `Profile Updated Successfully.`,
      status: "unread",
    })

    const user = await UserModel.findById(req.user.id);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};
