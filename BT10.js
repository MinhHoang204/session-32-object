class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  }
  
  let shoppingCart = [];
  
  function addToCart(productName, price, quantity) {
    let productIndex = shoppingCart.findIndex(product => product.name === productName);
    if (productIndex !== -1) {
      shoppingCart[productIndex].quantity += quantity;
    } else {
      shoppingCart.push(new Product(productName, price, quantity));
    }
  }
  
  function removeFromCart(productName) {
    let productIndex = shoppingCart.findIndex(product => product.name === productName);
    if (productIndex !== -1) {
      shoppingCart.splice(productIndex, 1);
    }
  }
  
  function calculateTotal() {
    let total = 0;
    for (let product of shoppingCart) {
      total += product.price * product.quantity;
    }
    return total;
  }
  
  function displayCart() {
    console.log("Product\tPrice\tQuantity\tTotal");
    for (let product of shoppingCart) {
      console.log(`${product.name}\t${product.price}\t${product.quantity}\t${product.price * product.quantity}`);
    }
  }
  
  function clearCart() {
    shoppingCart = [];
  }