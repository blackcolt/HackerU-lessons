const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: "The field text is a required field!",
    },
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: "The user id is a required field!",
    }
  },
  { timestamps: true }
);
postSchema.methods.testFunc = function testFunc(params) {
    console.log(11)
};
module.exports = mongoose.model("post", postSchema);
