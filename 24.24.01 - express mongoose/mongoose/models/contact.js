const mongoose = require('mongoose');
const contact = mongoose.model('Contact',  new mongoose.Schema({
    age: {
        required: true,
        type: Number
    },
    name: String,
    phone: String,
}))

module.exports = contact;