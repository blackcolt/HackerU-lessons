const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "The field name  is a required field!",
    },
    phone: {
      type: String,
      required: "The field name  is a required field!",
    },
    isVip: {
      type: Boolean,
      required: "The field name  is a required field!",
    },
    address: {
      type: String,
      required: "The field name  is a required field!",
    },
  },
  { timestamps: true }
);
clientSchema.methods.testFunc = function testFunc(params) {};
module.exports = mongoose.model("client", clientSchema);
