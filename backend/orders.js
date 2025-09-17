const express = require('express');
const router = express.Router();
const Order = require('../models/order'); // Assume you've created an order model

// POST /api/orders
// Create a new order
router.post('/orders', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET /api/orders
// Get all orders
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while fetching orders.' });
  }
});

module.exports = router;