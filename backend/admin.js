const express = require('express');
const router = express.Router();
const authAdmin = require('../middleware/authAdmin'); 

// GET /api/admin/dashboard
// This route is protected and only accessible by an admin user
router.get('/dashboard', authAdmin, (req, res) => {
  res.status(200).json({ message: 'Welcome to the Admin Dashboard!' });
});

module.exports = router;