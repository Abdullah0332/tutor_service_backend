import UserModel from "../models/user.model";
import TutorModel from "../models/tutor.mode";
import ParentModel from "../models/parent.model";

// ---------------------------------------------------------------
// --------------------- UPDATE TUTOR PROFILE -----------------------------
// ---------------------------------------------------------------
export const update_tutor_profile = async (req, res, next) => {
  try {
    const {
      intro,
      about_you,
      education,
      experience,
      teach_language,
      teach_type,
      main_field,
      you_teach,
      level_you_teach,
      student_age_you_teach,
      class_type,
      pricing,
      payment_detail,
      bank_info,
    } = req.body;

    const update_tutor_object = {};
    const update_user_object = {};

    if (intro) {
      update_tutor_object.intro = intro;
    }
    if (about_you) {
      update_tutor_object.about_you = about_you;
    }
    if (education) {
      update_tutor_object.education = education;
    }
    if (experience) {
      update_tutor_object.experience = experience;
    }

    if (teach_language) {
      update_tutor_object.teach_language = teach_language;
    }
    if (teach_type) {
      update_tutor_object.teach_type = teach_type;
    }
    if (main_field) {
      update_tutor_object.main_field = main_field;
    }
    if (you_teach) {
      update_tutor_object.you_teach = you_teach;
    }

    if (level_you_teach) {
      update_tutor_object.level_you_teach = level_you_teach;
    }
    if (student_age_you_teach) {
      update_tutor_object.student_age_you_teach = student_age_you_teach;
    }
    if (class_type) {
      update_tutor_object.class_type = class_type;
    }
    if (pricing) {
      update_tutor_object.pricing = pricing;
    }
    if (payment_detail) {
      update_tutor_object.payment_detail = payment_detail;
    }
    if (bank_info) {
      update_tutor_object.bank_info = bank_info;
    }

    // await TutorModel.updateOne({ user_id: id }, { $set: {} });

    res.status(201).json({ update_tutor_object });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};
