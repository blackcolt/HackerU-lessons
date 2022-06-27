const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: "The field text is a required field!",
    },
  },
  { timestamps: true }
);
postSchema.methods.testFunc = function testFunc(params) {};
module.exports = mongoose.model("Post", postSchema);
