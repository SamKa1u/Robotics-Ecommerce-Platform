const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.protect = async (req, res, next) => {
  let token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user to the request object (for easy access in subsequent handlers)
    req.user = await User.findById(decoded.id).select('-password');

    // Proceed to the next middleware/controller if everything is fine
    next();
  } catch (err) {
    console.error('Token verification error:', err.message);
    res.status(401).json({ message: 'Token is not valid' });
  }
};

exports.admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    // If user is an admin, proceed to the next middleware or controller
    next();
  } else {
    // If user is not an admin, return a forbidden error
    res.status(403).json({ message: 'Admin access only' });
  }
};
