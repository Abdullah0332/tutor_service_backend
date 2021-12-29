const UserModel = require("../models/user.model.js");
const ParentModel = require("../models/parent.model.js");

const {
  update_parent_profile_service,
} = require("../services/parent.service.js");

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
    const { first_name, last_name, age, class_name, gender } = req.body;

    const parent = await ParentModel.findOne({ user_id: req?.user?._id });

    if (!parent) {
      return res.status(500).json({ message: "Parent Not Found!!!" });
    }
    console.log(req?.file);
    parent?.kids.push({
      first_name,
      last_name,
      age,
      class_name,
      gender,
      profile_picture: req?.file.path,
    });

    await parent.save();

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
      return res.status(400).json({ message: "Parent Not Found!!!" });
    }

    const updated_kids = parent.kids.filter(
      (kid) => kid?._id.toString() !== id.toString()
    );
    parent.kids = updated_kids;
    await parent.save();

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
    const { first_name, last_name, age, class_name, gender } = req.body;

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
        },
      }
    );

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
