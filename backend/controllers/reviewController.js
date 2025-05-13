const Review = require('../models/review');

exports.addReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;

    // Basic validation
    if (typeof rating !== 'number' || rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Rating must be a number between 1 and 5' });
    }
    if (!comment || comment.trim().length === 0) {
      return res.status(400).json({ message: 'Comment cannot be empty' });
    }

    const review = new Review({
      product: req.params.productId,
      user: req.user.id,
      rating,
      comment
    });

    await review.save();
    console.log(`Review added for product ID: ${req.params.productId}`);
    res.status(201).json(review);
  } catch (err) {
    console.error('Error adding review:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getProductReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ product: req.params.productId }).populate('user');
    if (!reviews.length) {
      return res.status(404).json({ message: 'No reviews found for this product' });
    }
    res.json(reviews);
  } catch (err) {
    console.error('Error fetching reviews:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};
