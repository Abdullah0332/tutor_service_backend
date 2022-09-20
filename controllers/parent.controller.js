const UserModel = require("../models/user.model.js");
const ParentModel = require("../models/parent.model.js");
const {
  update_parent_profile_service,
} = require("../services/parent.service.js");
const PaymentModel = require("../models/payment.model.js");
const { filteredFCMTokens, sendNotification } = require("../libraries/pushNotification.js");
const notificationModel = require("../models/notification.model.js");

// ---------------------------------------------------------------
// --------------------- UPDATE PARENT PROFILE -----------------------------
// ---------------------------------------------------------------
exports.update_parent_profile = async (req, res, next) => {
  try {
    const { update_parent_object, update_user_object } =
      await update_parent_profile_service(req);

    await ParentModel.updateOne(
      { user_id: req?.user?._id },
      { $set: update_parent_object }
    );

    await UserModel.updateOne(
      { _id: req?.user?._id },
      { $set: update_user_object }
    );

    const data = await ParentModel.findOne({ user_id: req?.user?._id });

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

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- ADD KID -----------------------------
// ---------------------------------------------------------------
exports.add_kid = async (req, res, next) => {
  try {
    const {
      first_name,
      last_name,
      age,
      class_name,
      gender,
      educational,
      grade,
    } = req.body;

    const parent = await ParentModel.findOne({ user_id: req?.user?._id });
    const user = await UserModel.findById(req?.user?._id);

    if (!parent) {
      return res.status(500).json({ message: "Parent Not Found!!!" });
    }

    parent?.kids.push({
      first_name,
      last_name,
      age,
      class_name,
      gender,
      profile_picture: req?.file?.path,
      educational,
      grade,
    });

    user.is_profile_completed = true;
    await user.save();
    await parent.save();

    // let filtered_tokens = await filteredFCMTokens(req?.user?._id);
    // if (filtered_tokens?.length > 0) {
    //   await sendNotification({
    //     title: `Kid Added`,
    //     body: `Kid Added Successfully.`,
    //     userTokens: filtered_tokens
    //   });
    // }

    await notificationModel.create({
      user_id: req?.user?._id,
      type: "view",
      title: `Kid Added`,
      body: `Kid Added Successfully.`,
      status: "unread",
    })

    res.status(200).json({ message: "Kid Add Successfully!!!" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- REMOVE KID -----------------------------
// ---------------------------------------------------------------
exports.remove_kid = async (req, res, next) => {
  try {
    const { id } = req.params;

    const parent = await ParentModel.findOne({ user_id: req?.user?._id });

    if (!parent) {
      return res.status(404).json({ message: "Parent Not Found!!!" });
    }

    const updated_kids = parent.kids.filter(
      (kid) => kid?._id.toString() !== id.toString()
    );
    parent.kids = updated_kids;
    await parent.save();

    // let filtered_tokens = await filteredFCMTokens(req?.user?._id);
    // if (filtered_tokens?.length > 0) {
    //   await sendNotification({
    //     title: `Kid Removed`,
    //     body: `Kid Removed Successfully.`,
    //     userTokens: filtered_tokens
    //   });
    // }

    await notificationModel.create({
      user_id: req?.user?._id,
      type: "view",
      title: `Kid Removed`,
      body: `Kid Removed Successfully.`,
      status: "unread",
    })

    res.status(200).json({ message: "Kid Removed Successfully!!!" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- UPDATE KID -----------------------------
// ---------------------------------------------------------------
exports.update_kid = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      first_name,
      last_name,
      age,
      class_name,
      gender,
      educational,
      grade,
    } = req.body;

    const parent = await ParentModel.findOne({ user_id: req?.user?._id });

    if (!parent) {
      return res.status(500).json({ message: "Parent Not Found!!!" });
    }

    await ParentModel.updateOne(
      { "kids._id": id },
      {
        $set: {
          "kids.$.first_name": first_name,
          "kids.$.last_name": last_name,
          "kids.$.age": age,
          "kids.$.class_name": class_name,
          "kids.$.gender": gender,
          "kids.$.profile_picture": req?.file?.path,
          "kids.$.educational,": educational,
          "kids.$.grade,": grade,
        },
      }
    );

    // let filtered_tokens = await filteredFCMTokens(req?.user?._id);
    // if (filtered_tokens?.length > 0) {
    //   await sendNotification({
    //     title: `Kid Updated`,
    //     body: `Kid Updated Successfully.`,
    //     userTokens: filtered_tokens
    //   });
    // }

    await notificationModel.create({
      user_id: req?.user?._id,
      type: "view",
      title: `Kid Updated`,
      body: `Kid Updated Successfully.`,
      status: "unread",
    })

    res.status(200).json({ message: "Kid Updated Successfully!!!" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- GET ALL KID -----------------------------
// ---------------------------------------------------------------
exports.get_all_kid = async (req, res, next) => {
  try {
    const parent = await ParentModel.findOne({ user_id: req?.user?._id });

    if (!parent) {
      return res.status(500).json({ message: "Parent Not Found!!!" });
    }

    res.status(200).json({ kids: parent?.kids });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- GET ALL PAYMENTS -----------------------------
// ---------------------------------------------------------------
exports.get_all_payments = async (req, res, next) => {
  try {
    const payments = await PaymentModel.find({
      user_id: req?.user?._id,
    }).populate("user_id tutor_id class_id");

    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- UPDATE USER TYPR PARENT/INDIVIDUAL -----------------------------
// ---------------------------------------------------------------
exports.update_user_type = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const { user_type } = req.body;

    if (!["parent", "individual"].includes(user_type)) {
      return res.status(500).json({ message: "Please enter valid type." });
    }

    await UserModel.findOneAndUpdate({ _id: _id }, { $set: { user_type } });
    res.status(200).json({ message: "User Types Updated Successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};
