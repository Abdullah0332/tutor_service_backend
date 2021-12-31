// ---------------------------------------------------------------
// ---------------- UPDATE PARENT PROFILE SERVICE -------------------
// ---------------------------------------------------------------
exports.update_parent_profile_service = async (req) => {
  const {
    first_name,
    last_name,
    email,
    phone_number,
    location,
    name_on_card,
    card_number,
    exp_date,
    cvv,
  } = req?.body;

  const update_parent_object = {};
  const update_user_object = {};

  if (first_name) {
    update_user_object.first_name = first_name;
  }
  if (last_name) {
    update_user_object.last_name = last_name;
  }
  if (email) {
    update_parent_object.email = email;
    update_user_object.email = email;
    update_user_object.is_profile_completed = true;
  }
  if (phone_number) {
    update_parent_object.phone_number = phone_number;
  }
  if (location) {
    update_parent_object.location = location;
  }
  if (name_on_card) {
    update_parent_object.payment_detail.name_on_card = name_on_card;
  }
  if (card_number) {
    update_parent_object.payment_detail.card_number = card_number;
  }
  if (exp_date) {
    update_parent_object.payment_detail.exp_date = exp_date;
  }
  if (cvv) {
    update_parent_object.payment_detail.cvv = cvv;
  }

  return {
    update_parent_object,
    update_user_object,
  };
};
