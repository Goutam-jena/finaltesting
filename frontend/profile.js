// frontend/profile.js
function getUserProfile(userId) {
  // This function will fetch user data from the backend.
  console.log(`Fetching profile for user ID: ${userId}`);
  // In a real project, this would be an API call
  // For now, let's return some dummy data
  return {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software developer and Git enthusiast.',
  };
}

export default getUserProfile;