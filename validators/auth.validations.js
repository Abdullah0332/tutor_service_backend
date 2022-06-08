const validator = require("validator");
const bcrypt = require("bcryptjs");
const UserModel = require("../models/user.model.js");

// ---------------------------------------------------------------
// --------------------- SIGN VALIDATIONS -----------------------------
// ---------------------------------------------------------------
exports.sign_up_validator = async (data) => {
  const { first_name, last_name, email, password } = data;

  let errors = {};

  const user = await userExit(email);

  if (user) {
    errors.message = "User already exist on this email";
  }

  if (email && !validator.isEmail(email)) {
    errors.email = "Please enter valid email address.";
  }
  if (!first_name) {
    errors.first_name = "First Name is required.";
  }
  if (!last_name) {
    errors.last_name = "Last Name is required.";
  }
  if (!email) {
    errors.email = "Email is required.";
  }
  if (!password) {
    errors.password = "Password is required.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length,
  };
};

// ---------------------------------------------------------------
// --------------------- LOGIN VALIDATIONS -----------------------------
// ---------------------------------------------------------------
exports.login_validator = async (data) => {
  const { email, password } = data;

  let errors = {};

  // const user = await UserModel.findOne({ email: email?.toLowerCase() });
  const user = await userExit(email);

  if (!user || user === null) {
    errors.message = "User Not Found on given email";
  }

  if (user?.active === false) {
    errors.message = "User is deactiated by admin";
  }

  if (email && !validator.isEmail(email)) {
    errors.email = "Email Not Valid";
  }

  if (!email) {
    errors.email = "Email is required.";
  }
  if (!password) {
    errors.password = "Password is required.";
  }

  if (user && password) {
    // Check if password is correct or not
    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      errors.message = "Email/Password combination do not match";
    }
  }

  return {
    errors,
    isValid: Object.keys(errors).length,
  };
};

// ---------------------------------------------------------------
// --------------------- FORGOT PASSWORD VALIDATIONS -----------------------------
// ---------------------------------------------------------------
exports.forgot_password_validation = async (data) => {
  const { email } = data;

  let errors = {};

  const user = await userExit(email);

  if (!user) {
    errors.message = "No User exits with given email.";
  }

  if (email && !validator.isEmail(email)) {
    errors.email = "Email Not Valid.";
  }

  if (!email) {
    errors.email = "Email is required.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length,
  };
};

// ---------------------------------------------------------------
// --------------------- OTP VARIFICATION VALIDATIONS -----------------------------
// ---------------------------------------------------------------
exports.otp_validation = async (data) => {
  const { email, otp } = data;

  let errors = {};

  const user = await userExit(email);

  if (!user) {
    errors.message = "No User exits with given email.";
  }

  console.log(user);

  const user_with_otp = await UserModel.findOne({
    email: email?.toLowerCase(),
    otp,
  });

  if (!user_with_otp && user) {
    errors.message = "Your Verification OTP Code Is Not Valid.";
  }

  if (email && !validator.isEmail(email)) {
    errors.email = "Email Not Valid.";
  }

  if (!email) {
    errors.email = "Email is required.";
  }

  if (!otp) {
    errors.otp = "OTP is required.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length,
  };
};

// ---------------------------------------------------------------
// --------------------- RESET PASSWORD VALIDATIONS -----------------------------
// ---------------------------------------------------------------
exports.reset_password_validation = async (data) => {
  const { email, password } = data;

  let errors = {};

  const user = await userExit(email);

  if (!user) {
    errors.message = "No User exits with given email.";
  }

  if (email && !validator.isEmail(email)) {
    errors.email = "Email Not Valid.";
  }

  if (!email) {
    errors.email = "Email is required.";
  }

  if (!password) {
    errors.password = "Password is required.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length,
  };
};

// ---------------------------------------------------------------
// --------------------- UPDATE PASSWORD BY PROFILEVALIDATIONS -----------------------------
// ---------------------------------------------------------------
exports.update_password_from_profile_validation = async (req) => {
  const { old_password, new_password } = req?.body;

  const user = await UserModel.findById(req?.user?._id);

  let errors = {};

  if (old_password && new_password) {
    const isPasswordMatched = await bcrypt.compare(old_password, user.password);

    if (!isPasswordMatched) {
      errors.message = "Old Password is not correct.";
    }

    if (isPasswordMatched) {
      user.password = new_password;
      await user.save();
    }
  }

  return {
    errors,
    isValid: Object.keys(errors).length,
  };
};

// ---------------------------------------------------------------
// --------------------- CHECK USER EXIT -----------------------------
// ---------------------------------------------------------------
const userExit = async (email) =>
  await UserModel.findOne({ email: email?.toLowerCase() });
