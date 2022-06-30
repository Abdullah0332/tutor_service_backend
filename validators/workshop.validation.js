const validator = require("validator");
const bcrypt = require("bcryptjs");
const UserModel = require("../models/user.model.js");

// ---------------------------------------------------------------
// --------------------- CREATE WORKSHOP VALIDATIONS -----------------------------
// ---------------------------------------------------------------
exports.create_workshop_validator = async (data) => {
  const {
    title,
    date,
    total_seats_available,
    price_per_seat,
    language_of_workshop,
    organizer_name,
    contact_information,
  } = data;

  let errors = {};

  if (!title) {
    errors.title = "Workshop title is required.";
  }

  if (!date) {
    errors.date = "Date is required.";
  }
  if (!total_seats_available) {
    errors.total_seats_available = "Please Enter total number of seats.";
  }
  if (!price_per_seat) {
    errors.price_per_seat = "Please enter price per seat.";
  }
  if (!language_of_workshop) {
    errors.language_of_workshop = "Language of workshop is required.";
  }
  if (!organizer_name) {
    errors.organizer_name = "Organizer Name is required.";
  }
  if (!contact_information.contact_name) {
    errors.contact_name = "Contact Name is required.";
  }
  if (!contact_information.contact_email) {
    errors.contact_email = "Conatct Email is required.";
  }
  if (!contact_information.phone_number) {
    errors.phone_number = "Phone Number is required.";
  }

  if (
    contact_information.contact_email &&
    !validator.isEmail(contact_information.contact_email)
  ) {
    errors.email = "Please enter valid email address.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length,
  };
};

// ---------------------------------------------------------------
// --------------------- REGISTER WORKSHOP VALIDATIONS -----------------------------
// ---------------------------------------------------------------
exports.register_workshop_validator = async (data) => {
  const { name_of_card, card_number, exp_date, cvv, email } = data;

  let errors = {};

  if (!name_of_card) {
    errors.name_of_card = "Please Enter Card Name.";
  }

  if (!card_number) {
    errors.card_number = "Please Enter Card Number.";
  }
  if (!exp_date) {
    errors.exp_date = "Please Enter Card Expiration Date.";
  }
  if (!cvv) {
    errors.cvv = "Please Enter CVV.";
  }
  if (!email) {
    errors.email = "Email is required.";
  }
  if (email && !validator.isEmail(email)) {
    errors.email = "Please enter valid email address.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length,
  };
};
