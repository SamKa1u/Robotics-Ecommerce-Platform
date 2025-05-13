// models/order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number,
    }
  ],
  status: { type: String, default: 'Pending' },
  shippingInfo: {
    address: String,
    city: String,
    postalCode: String,
    country: String,
  },
  totalAmount: Number,
  paymentStatus: { type: String, default: 'Unpaid' },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
