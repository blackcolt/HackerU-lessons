const mongoose = require('mongoose');
const cardSchema = new mongoose.Schema({
  cardNumber: {
    type: Number,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
  expDate: {
    type: Date,
    required: true,
  },
});
// Schema.methods.testFunc = function testFunc(params) {}
module.exports = mongoose.model('card', cardSchema);
