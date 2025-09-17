// frontend/product-list.js
async function fetchProducts() {
  try {
    const response = await fetch('http://localhost:3000/api/products');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

function displayProducts(products) {
  const container = document.getElementById('products-container');
  if (!container) return;

  container.innerHTML = '<h2>Products</h2>';
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product-item';
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <p>Category: ${product.category}</p>
    `;
    container.appendChild(productDiv);
  });
}

// Call the function to get and display products
fetchProducts();