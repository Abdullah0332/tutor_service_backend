import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import config from "../config/index.js";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    password: { type: String },
    user_type: { type: String, enum: ["parent", "individual", "tutor"] },
  },
  { timestamps: true }
);

//Encrypting Password Before Saving User
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// Compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Return JWT
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, config.JWT_SECRET, {
    expiresIn: config.JWT_EXPIRE_TIME,
  });
};

const User = mongoose.model("User", userSchema);
export default User;
