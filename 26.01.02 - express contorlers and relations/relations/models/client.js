const mongoose = require("mongoose");
const ClientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "שדה שם הוא שדה חובה",
    },
    address: {
      type: String,
      required: "שדה כתובת הוא שדה חובה",
    },
    isVip: {
      type: String,
      default: false,
    },
    phone: {
      type: String,
      default: false,
    },
  },

  { timestamps: true }
);
ClientSchema.methods.testFunc = function testFunc(params) {};
ClientSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("client", ClientSchema);
