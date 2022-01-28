// order -> {
//     client: -> objectId -> client
//     store: ->objectId -> store
// }

const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      required: "The field client is a required field!",
      ref: "client",
    },
    store: {
      type: mongoose.Schema.Types.ObjectId,
      required: "The field client is a required field!",
      ref: "store",
    },
    text: {
      type: String,
      required: "The text client is a required field!",
    },
  },
  { timestamps: true }
);
orderSchema.methods.testFunc = function testFunc(params) {};
module.exports = mongoose.model("Order", orderSchema);
