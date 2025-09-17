async function createNewOrder(orderDetails) {
  try {
    const response = await fetch('http://localhost:3000/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderDetails),
    });
    if (!response.ok) {
      throw new Error('Failed to create order');
    }
    const order = await response.json();
    console.log('Order created:', order);
  } catch (error) {
    console.error('Error creating order:', error);
  }
}

async function fetchOrders() {
  try {
    const response = await fetch('http://localhost:3000/api/orders');
    if (!response.ok) {
      throw new Error('Failed to fetch orders');
    }
    const orders = await response.json();
    console.log('Orders fetched:', orders);
    // Display logic would go here
  } catch (error) {
    console.error('Error fetching orders:', error);
  }
}

// Example usage
// createNewOrder({ userId: '123', items: [{ productId: 'abc', quantity: 1 }] });
// fetchOrders();