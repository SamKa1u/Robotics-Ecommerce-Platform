// utils/formatters.js

exports.formatOrder = (order) => ({
  id: order._id,
  user: {
    id: order.user._id,
    name: order.user.name,
    email: order.user.email,
  },
  items: order.items.map(item => ({
    id: item.product._id,
    name: item.product.name,
    image: item.product.image?.[0], // optional chaining if array
    price: item.product.price,
    quantity: item.quantity,
  })),
  totalAmount: order.totalAmount,
  status: order.status,
  paymentStatus: order.paymentStatus,
  shippingInfo: order.shippingInfo,
  createdAt: order.createdAt,
  updatedAt: order.updatedAt,
});
