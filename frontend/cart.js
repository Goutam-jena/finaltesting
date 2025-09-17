// frontend/cart.js
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    this.items.push(product);
    console.log(`${product.name} added to cart.`);

  }

  getCartItems() {
    return this.items;
  }
}

const cart = new ShoppingCart();
export default cart;