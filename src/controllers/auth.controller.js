import UserModel from "../models/user.model";
import TutorModel from "../models/tutor.mode";
import ParentModel from "../models/parent.model";
import {
  sign_up_validator,
  login_validator,
  forgot_password_validation,
  otp_validation,
  reset_password_validation,
} from "../validators/auth.validations";
import { randomOTP } from "../libraries/utils";
import { forgot_password_email } from "../libraries/emails/email.sender";

// ---------------------------------------------------------------
// --------------------- SIGN UP -----------------------------
// ---------------------------------------------------------------
export const sign_up = async (req, res, next) => {
  try {
    const { user_type, first_name, last_name, email, password } = req.body;

    const { isValid, errors } = await sign_up_validator(req.body);

    if (isValid > 0) {
      return res.status(400).json(errors);
    }

    const user = await UserModel.create({
      user_type,
      first_name,
      last_name,
      email,
      password,
    });

    if (user_type === "tutor") {
      await TutorModel.create({
        user_id: user?._id,
        email,
      });
    } else {
      await ParentModel.create({
        user_id: user?._id,
        type: user_type,
        email,
      });
    }

    const token = user.getJwtToken();

    res.status(201).json({ ...user.toObject(), token });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- LOGIN -----------------------------
// ---------------------------------------------------------------
export const login = async (req, res, next) => {
  try {
    const { user_type, email, password } = req.body;

    const { isValid, errors } = await login_validator(req.body);

    if (isValid > 0) {
      return res.status(400).json(errors);
    }

    const user = await UserModel.findOne({
      email: email.toLowerCase(),
    });

    const token = user.getJwtToken();

    res.status(200).json({ ...user.toObject(), token });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- LOGGED IN USER -----------------------------
// ---------------------------------------------------------------
export const me = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user._id);
    let profile;
    if (user?.user_type === "tutor") {
      profile = await TutorModel.findOne({ user_id: req.user._id });
    } else {
      profile = await ParentModel.findOne({ user_id: req.user._id });
    }

    res.status(200).json({ ...user.toObject(), profile });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- FORGOT PASSWORD -----------------------------
// ---------------------------------------------------------------
export const forgot_password = async (req, res, next) => {
  try {
    const { email } = req.body;

    const { isValid, errors } = await forgot_password_validation(req.body);

    if (isValid > 0) {
      return res.status(400).json(errors);
    }

    const otp = await randomOTP();

    const user = await UserModel.findOne({ email: email.toLowerCase() });

    await UserModel.updateOne(
      { email: email.toLowerCase() },
      { $set: { otp } }
    );

    await forgot_password_email({
      email: email,
      subject: "Forgot Password",
      otp: otp,
      name: `${user?.first_name} ${user?.last_name}`,
    });

    res
      .status(200)
      .json({ message: "Check you eamil, OTP send successfully." });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- OTP VERIFY -----------------------------
// ---------------------------------------------------------------
export const otp_verify = async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    const { isValid, errors } = await otp_validation(req.body);

    if (isValid > 0) {
      return res.status(400).json(errors);
    }

    const user = await UserModel.findOne({ email: email.toLowerCase(), otp });

    await UserModel.updateOne(
      { email: email.toLowerCase() },
      { $set: { otp: null } }
    );

    res.status(200).json({ message: "OTP verified successfully." });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- RESET PASSWORD -----------------------------
// ---------------------------------------------------------------
export const reset_password = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { isValid, errors } = await reset_password_validation(req.body);

    if (isValid > 0) {
      return res.status(400).json(errors);
    }

    const user = await UserModel.findOne({ email: email.toLowerCase() });

    user.password = password;

    await user.save();

    res.status(200).json({ message: "Paassword Reset successfully." });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};
