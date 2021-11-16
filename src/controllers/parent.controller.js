import UserModel from "../models/user.model";
import TutorModel from "../models/tutor.mode";
import ParentModel from "../models/parent.model";

import { update_parent_profile_service } from "../services/parent.service.js";

// ---------------------------------------------------------------
// --------------------- UPDATE PARENT PROFILE -----------------------------
// ---------------------------------------------------------------
export const update_parent_profile = async (req, res, next) => {
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
