const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    // name: {
    //   type: String,
    //   required: "The field  is a required field!",
    // },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", userSchema);
