// frontend/cart.js
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    this.items.push(product);
    console.log(`${product.name} added to cart.`);
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    console.log(`Item with ID ${productId} removed from cart.`);
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  getCartItems() {
    return this.items;
  }
}

const cart = new ShoppingCart();
export default cart;