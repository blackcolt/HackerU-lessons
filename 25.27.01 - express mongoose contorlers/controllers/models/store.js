const mongoose = require("mongoose");
const storeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "The field name is a required field!",
    },
    address: {
      type: String,
      required: "The field address is a required field!",
    },
    phone: {
      type: String,
      required: "The field phone is a required field!",
    },
  },
  { timestamps: true }
);
storeSchema.methods.testFunc = function testFunc(params) {};
module.exports = mongoose.model("store", storeSchema);
