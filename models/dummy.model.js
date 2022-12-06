const mongoose = require("mongoose");

const dummySchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Types.ObjectId, ref: "User" },
    data: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dummy", dummySchema);
