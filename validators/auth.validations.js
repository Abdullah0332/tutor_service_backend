import validator from "validator";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const signupValidator = async (data) => {
  const { name, email, password } = data;
  let errors = {};
  if (!name || !email || !password) {
    errors.message = "Please provide complete information";
  }
  const user = await User.findOne({ email: email.toLowerCase() });

  if (user) {
    errors.message = "User already exist on this email";
  }
  return {
    errors,
    isValid: Object.keys(errors).length,
  };
};

export const loginValidator = async (data) => {
  const { email, password } = data;

  let errors = {};

  const user = await User.findOne({ email: email.toLowerCase() });

  if (!user) {
    errors.message = "User Not Found on given email";
  }

  if (email && !validator.isEmail(email)) {
    errors.email = "Email Not Valid";
  }

  if (!email || !password) {
    errors.message = "Please Enter Your Email And password Both";
  }

  if (user) {
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
