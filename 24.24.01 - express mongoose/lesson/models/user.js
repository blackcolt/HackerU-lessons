const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "The field name is a required field!",
  },
  tz: {
    type: String,
    required: "The tz text is a required field!",
  },
  phone: {
    type: String,
    required: "You need a phone!!!!!",
  },
});
module.exports = mongoose.model("User", userSchema);
