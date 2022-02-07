const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "The field name is a required field!",
    },
    date: {
      type: Date,
      default: Date.now,
    },
    country: {
      type: String,
      required: "The field country is a required field!",
    },
    cast: {
      type: [String],
      required: "The field cast is a required field!",
    },
  },
  { timestamps: true }
);

movieSchema.methods.testFunc = function testFunc(params) {};
module.exports = mongoose.model("Movie", movieSchema);
