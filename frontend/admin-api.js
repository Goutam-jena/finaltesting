async function getAdminDashboardData() {
  const adminHeaders = {
    'x-admin-role': 'true' // Simulating an admin user
  };

  try {
    const response = await fetch('http://localhost:3000/api/admin/dashboard', {
      headers: adminHeaders,
    });

    if (!response.ok) {
      throw new Error('You do not have permission to view this page.');
    }

    const data = await response.json();
    console.log(data.message);
    return data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// Example usage
// getAdminDashboardData();