const express = require('express');
const router = express.Router();

// A simple array to store review data
const reviews = [];

// POST /api/reviews
// Endpoint to submit a new review
router.post('/reviews', (req, res) => {
  const { productId, rating, comment } = req.body;
  if (!productId || !rating || !comment) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const newReview = { id: Date.now(), productId, rating, comment, createdAt: new Date() };
  reviews.push(newReview);
  res.status(201).json(newReview);
});

// GET /api/reviews/:productId
// Endpoint to get all reviews for a specific product
router.get('/reviews/:productId', (req, res) => {
  const { productId } = req.params;
  const productReviews = reviews.filter(review => review.productId === parseInt(productId));
  res.status(200).json(productReviews);
});

module.exports = router;