const authAdmin = (req, res, next) => {
  // In a real app, you'd check a user's role from a token or session
  const isAdmin = req.headers['x-admin-role'] === 'true'; 

  if (!isAdmin) {
    return res.status(403).json({ message: 'Access denied. Admin role required.' });
  }
  next();
};

module.exports = authAdmin;