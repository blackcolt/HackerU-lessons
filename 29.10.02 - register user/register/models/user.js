const Joi = require("Joi");
const mongoose = require("mongoose");
var crypto = require("crypto");
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    fName: {},
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

UserSchema.methods.hashPassword = function () {
  this.password = crypto
    .pbkdf2Sync(this.password, "", 1000, 64, `sha512`)
    .toString(`hex`);
};

UserSchema.methods.validateUser = function validate(params) {
  this.password = crypto
    .pbkdf2Sync(this.password, "", 1000, 64, `sha512`)
    .toString(`hex`);
};
UserSchema.methods.validateUserSchema = function () {
  const joi = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    fName: Joi.string().alphanum().min(2).max(30),
    password: Joi.string().alphanum().min(10).max(30),
  });
  return joi;
};

// UserSchema.methods.genratePassword = function genratePassword() {
//   this.password = crypto.randomBytes(20).toString("hex");
// };
// UserSchema.methods.getFullName = function getFullName() {
//   return this.name + " " + this.fName;
// };
// UserSchema.methods.hashPassword = function hasPassword() {
//   this.password = crypto
//     .pbkdf2Sync(this.password, "", 1000, 64, `sha512`)
//     .toString(`hex`);
// };
// UserSchema.methods.validPassword = function (password) {
//   var hash = crypto
//     .pbkdf2Sync(password, "", 1000, 64, `sha512`)
//     .toString(`hex`);
//   return this.password === hash;
// };
module.exports = mongoose.model("User", UserSchema);
