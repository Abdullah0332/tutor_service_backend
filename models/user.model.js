const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("../config/index.js");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const userSchema = mongoose.Schema(
  {
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    password: { type: String },
    profile_pic: { type: String, default: "" },
    user_type: {
      type: String,
      enum: ["parent", "individual", "tutor", "admin"]
    },
    otp: { type: Number },
    is_profile_completed: { type: Boolean, default: false },
    register_type: {
      type: String,
      enum: ["local", "google", "facebook"],
      default: "local"
    },
    socialId: { type: String },
    active: { type: Boolean, default: true },
    email_verified: { type: Boolean, default: false },
    resetPasswordToken: String,
    resetPasswordExpire: Date
  },
  { timestamps: true }
);

//Encrypting Password Before Saving User
userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// Compare user password
userSchema.methods.comparePassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Return JWT
userSchema.methods.getJwtToken = function() {
  return jwt.sign(
    { id: this._id },
    config.JWT_SECRET,
    {
      // expiresIn: config.JWT_EXPIRE_TIME,
    }
  );
};

// Generate password reset token
userSchema.methods.getResetPasswordToken = function() {
  // Generate the token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash and set to resetPasswordToken
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  return resetToken;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
