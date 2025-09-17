// backend/auth.js
function authenticateUser(username, password) {
  console.log(`Authenticating user: ${username}`);
  // In a real application, you would check the username and password against a database
  if (username === 'admin' && password === 'password123') {
    return true; // Authentication successful
  }
  return false; // Authentication failed
}

module.exports = { authenticateUser };