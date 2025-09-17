async function submitReview(productId, rating, comment) {
  const response = await fetch('http://localhost:3000/api/reviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productId, rating, comment }),
  });
  if (response.ok) {
    console.log('Review submitted successfully!');
    return await response.json();
  } else {
    console.error('Failed to submit review.');
    return null;
  }
}

async function getProductReviews(productId) {
  const response = await fetch(`http://localhost:3000/api/reviews/${productId}`);
  if (response.ok) {
    const reviews = await response.json();
    console.log(`Reviews for product ${productId}:`, reviews);
    // Logic to display reviews on the page would go here
    return reviews;
  } else {
    console.error('Failed to get reviews.');
    return [];
  }
}

// Example usage:
// submitReview(1, 5, 'Great product, highly recommend!');
// getProductReviews(1);