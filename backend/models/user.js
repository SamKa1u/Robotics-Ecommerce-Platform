const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  zip: String,
  country: String
}, { _id: false });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  addresses: [addressSchema],
  paymentMethods: [String]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
