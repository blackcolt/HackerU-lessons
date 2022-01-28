const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "The field name is a required field!"
  },
  posts:  {
      type: mongoose.Schema.Types.ObjectId,
      ref:'Post'
    }
},{timestamps: true})
userSchema.methods.testFunc = function testFunc(params) {}
module.exports = mongoose.model('User', userSchema);