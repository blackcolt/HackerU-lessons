const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema(
  {
    messageText: {
      type: String,
      required: "The field messageText is a required field!",
    },
  },
  { timestamps: true }
);
messageSchema.methods.testFunc = function testFunc(params) {};
module.exports = mongoose.model("Message", messageSchema);
