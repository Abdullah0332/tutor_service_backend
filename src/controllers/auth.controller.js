import UserModel from "../models/user.model";
import TutorModel from "../models/tutor.model";
import ParentModel from "../models/parent.model";
import {
  sign_up_validator,
  login_validator,
  forgot_password_validation,
  otp_validation,
  reset_password_validation,
  update_password_from_profile_validation,
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
      email: email.toLowerCase(),
      password,
      register_type: "local",
      active: true,
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
    const { email } = req.body;

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
// --------------------- SOCIAL LOGIN -----------------------------
// ---------------------------------------------------------------
export const social_login = async (req, res, next) => {
  try {
    const { name, user_type, email, socialId, url, type } = req.body;

    const userExit = await UserModel.findOne({
      email: email.toLowerCase(),
    });

    // if user exit
    if (userExit) {
      const token = userExit.getJwtToken();
      return res.status(200).json({
        ...user.toObject(),
        token,
      });
    }

    // if user don't exit

    const user = await UserModel.create({
      user_type,
      first_name: name,
      last_name: name,
      email: email.toLowerCase(),
      // password,
      register_type: type,
      active: true,
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

// ---------------------------------------------------------------
// --------------------- REFRESH TOKEN -----------------------------
// ---------------------------------------------------------------
export const refresh_token = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user._id);

    const token = user.getJwtToken();

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- UPDATE PROFILE PICTURE -----------------------------
// ---------------------------------------------------------------
export const update_user_profile_picture = async (req, res, next) => {
  try {
    console.log(req.file);

    await UserModel.updateOne(
      { _id: req?.user?._id },
      { $set: { profile_pic: req?.file?.path } }
    );

    const data = await UserModel.findById(req?.user?._id);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- UPDATE PASSWORD FROM PROFILE -----------------------------
// ---------------------------------------------------------------
export const udpate_password_from_profile = async (req, res, next) => {
  try {
    const { isValid, errors } = await update_password_from_profile_validation(
      req
    );

    if (isValid > 0) {
      return res.status(400).json(errors);
    }

    res.status(200).json({ message: "Password Updated Successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- ADD PAYMENT METHOD -----------------------------
// ---------------------------------------------------------------
export const add_payment_method = async (req, res, next) => {
  try {
    let id = req?.user?._id;
    const { name_on_card, card_number, exp_date, cvv } = req.body;

    const user = await UserModel.findById(id);

    const user_profile =
      user?.user_type === "tutor"
        ? await TutorModel.findOne({ user_id: id })
        : await ParentModel.findOne({ user_id: id });

    user_profile?.payment_detail?.push({
      name_on_card,
      card_number,
      exp_date,
      cvv,
    });

    await user_profile.save();

    res.status(200).json({ message: "Payment Method Added Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- UPDATE PAYMENT METHOD -----------------------------
// ---------------------------------------------------------------
export const update_payment_method = async (req, res, next) => {
  try {
    let { id } = req?.params;
    const { name_on_card, card_number, exp_date, cvv } = req.body;

    const user = await UserModel.findById(req?.user?._id);

    user?.user_type === "tutor"
      ? await TutorModel.updateOne(
          { "payment_detail._id": id },
          {
            $set: {
              "payment_detail.$.name_on_card": name_on_card,
              "payment_detail.$.card_number": card_number,
              "payment_detail.$.exp_date": exp_date,
              "payment_detail.$.cvv": cvv,
            },
          }
        )
      : await ParentModel.updateOne(
          { "payment_detail._id": id },
          {
            $set: {
              "payment_detail.$.name_on_card": name_on_card,
              "payment_detail.$.card_number": card_number,
              "payment_detail.$.exp_date": exp_date,
              "payment_detail.$.cvv": cvv,
            },
          }
        );

    res.status(200).json({ message: "Payment Method Updated Successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- DELETE PAYMENT METHOD -----------------------------
// ---------------------------------------------------------------
export const remove_payment_method = async (req, res, next) => {
  try {
    let { id } = req?.params;

    const user = await UserModel.findById(req?.user?._id);

    if (!user) {
      return res.status(400).json({ message: "User Not Found!!!" });
    }

    const user_detail =
      user?.user_type === "tutor"
        ? await TutorModel.findOne({ user_id: req?.user?._id })
        : await ParentModel.findOne({ user_id: req?.user?._id });

    if (!user_detail) {
      return res
        .status(400)
        .json({ message: `${user?.user_type} Detail Not Found!!!` });
    }

    const updated_user_detail = user_detail.payment_detail.filter(
      (payment) => payment?._id.toString() !== id.toString()
    );
    user_detail.payment_detail = updated_user_detail;
    await user_detail.save();

    res.status(200).json({ message: "Payment Method Removed Successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

// ---------------------------------------------------------------
// --------------------- GET ALL PAYMENT METHOD -----------------------------
// ---------------------------------------------------------------
export const get_all_payment_method = async (req, res, next) => {
  try {
    let { id } = req?.params;

    const user = await UserModel.findById(req?.user?._id);

    if (!user) {
      return res.status(400).json({ message: "User Not Found!!!" });
    }

    const user_detail =
      user?.user_type === "tutor"
        ? await TutorModel.findOne({ user_id: req?.user?._id })
        : await ParentModel.findOne({ user_id: req?.user?._id });

    if (!user_detail) {
      return res
        .status(400)
        .json({ message: `${user?.user_type} Detail Not Found!!!` });
    }

    res.status(200).json({ payment_detail: user_detail?.payment_detail });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};
