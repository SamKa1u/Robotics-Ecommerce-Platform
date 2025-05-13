const Order = require('../models/order');
const { formatOrder } = require('../utils/formatters');

// Get all orders - Admin can see all, user can see only their orders
exports.getOrders = async (req, res) => {
  try {
    const query = req.user.isAdmin ? {} : { user: req.user.id }; // If user is admin, fetch all orders, else fetch only their orders

    // Fetch orders with populated user and item product details
    const orders = await Order.find(query)
      .populate('user', '-password')  // Exclude password from user details
      .populate('items.product');     // Populate product details in items

    if (orders.length === 0) {
      return res.status(404).json({ message: 'No orders found' });
    }

    res.json(orders);
  } catch (err) {
    console.error('Error fetching orders:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    // Destructure and format order details
    const { items, shippingAddress, paymentMethod } = req.body;

    // Validate order details (items, address, payment method etc.)
    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'Order must contain at least one item' });
    }

    if (!shippingAddress || !shippingAddress.street || !shippingAddress.city || !shippingAddress.zipcode) {
      return res.status(400).json({ message: 'Invalid shipping address' });
    }

    if (!paymentMethod || !['cod', 'stripe', 'paypal'].includes(paymentMethod)) {
      return res.status(400).json({ message: 'Invalid payment method' });
    }

    // Create and save order
    const order = new Order({
      items,
      user: req.user.id,
      shippingAddress,
      paymentMethod,
      status: 'Pending',  // default status for a new order
    });

    await order.save();
    res.status(201).json(order);
  } catch (err) {
    console.error('Error creating order:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update an order (Admin can update any order, user can update only their own order)
exports.updateOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const orderData = req.body;

    // Check if the user is allowed to update the order
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // If the user is not admin, ensure they can only update their own order
    if (!req.user.isAdmin && order.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'You are not authorized to update this order' });
    }

    // Update the order
    const updatedOrder = await Order.findByIdAndUpdate(orderId, orderData, { new: true });
    res.json(updatedOrder);
  } catch (err) {
    console.error('Error updating order:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};
