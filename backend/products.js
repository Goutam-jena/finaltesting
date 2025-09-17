// backend/products.js
const express = require('express');
const router = express.Router();

const products = [
  { id: 1, name: 'Laptop', price: 1200, category: 'Electronics' },
  { id: 2, name: 'Smartphone', price: 800, category: 'Electronics' },
  { id: 3, name: 'Coffee Mug', price: 15, category: 'Home Goods' },
  { id: 4, name: 'T-Shirt', price: 25, category: 'Apparel' },
];

router.get('/products', (req, res) => {
  console.log("Serving product data...");
  res.json(products);
});

module.exports = router;