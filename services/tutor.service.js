// ---------------------------------------------------------------
// ---------------- UPDATE TUTOR PROFILE SERVICE -------------------
// ---------------------------------------------------------------
exports.update_tutor_profile_service = async (req) => {
  const {
    first_name,
    last_name,
    email,
    phone_number,
    location,
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
    bank_info,
    schedule,
  } = req?.body;
  console.log(req.body);
  const update_tutor_object = {};
  const update_user_object = {};

  if (first_name) {
    update_user_object.first_name = first_name;
  }
  if (last_name) {
    update_user_object.last_name = last_name;
  }
  if (email) {
    update_tutor_object.email = email;
    update_user_object.email = email;
  }
  if (phone_number) {
    update_tutor_object.phone_number = phone_number;
  }
  if (location) {
    update_tutor_object.location = location;
  }
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
  if (bank_info) {
    update_tutor_object.bank_info = bank_info;
  }
  if (schedule) {
    update_tutor_object.schedule = schedule;
  }
  if (bank_info) {
    update_tutor_object.bank_info = bank_info;
  }
  if (req?.files) {
    let images_path = req.files.map(({ path }) => path);
    update_tutor_object.gallery = images_path;
  }

  return {
    update_tutor_object,
    update_user_object,
  };
};
