const express = require('express');
const router = express.Router();
const {
  addReview,
  getProductReviews
} = require('../controllers/reviewController');
const { protect } = require('../middlewares/authMiddleware');

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Product reviews management
 */

/**
 * @swagger
 * /api/reviews/{productId}:
 *   post:
 *     summary: Add a review for a product
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the product to review
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - rating
 *               - comment
 *             properties:
 *               rating:
 *                 type: number
 *                 minimum: 1
 *                 maximum: 5
 *               comment:
 *                 type: string
 *     responses:
 *       201:
 *         description: Review added successfully
 *       400:
 *         description: Invalid input or duplicate review
 *       401:
 *         description: Unauthorized
 */
router.post('/:productId', protect, addReview);

/**
 * @swagger
 * /api/reviews/{productId}:
 *   get:
 *     summary: Get all reviews for a product
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the product to fetch reviews for
 *     responses:
 *       200:
 *         description: List of reviews
 *       404:
 *         description: Product not found or no reviews
 */
router.get('/:productId', getProductReviews);

module.exports = router;
