const mongoose = require("mongoose");
const StoreSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: "שדה כתובת הוא שדה נדרש",
    },
    name: {
      type: String,
      required: "שדה שם הוא שדה נדרש",
    },
    phone: {
      type: String,
      required: "שדה טלפון הוא שדה נדרש",
    },
  },
  { timestamps: true }
);
StoreSchema.methods.testFunc = function testFunc(params) {};
module.exports = mongoose.model("store", StoreSchema);
