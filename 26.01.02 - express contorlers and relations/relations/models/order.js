const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "client",
      required: "יש להזין מזהה לקוח",
    },
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "store",
      required: "יש להזין מזהה חנות",
    },
    orderText: {
      type: String,
      required: "טקסט הזמנה נדרש",
    },
  },
  { timestamps: true }
);
OrderSchema.methods.testFunc = function testFunc(params) {};
module.exports = mongoose.model("order", OrderSchema);
