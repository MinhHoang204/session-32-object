class Product {
    constructor(id, product_name, price) {
      this.id = id;
      this.product_name = product_name;
      this.price = price;
    }
  }
  
  let products = [
    new Product(1, "Product A", 100),
    new Product(2, "Product B", 200),
    new Product(3, "Product C", 300),
    new Product(4, "Product D", 400),
    new Product(5, "Product E", 500),
    new Product(6, "Product F", 600),
    new Product(7, "Product G", 700),
    new Product(8, "Product H", 800),
    new Product(9, "Product I", 900),
    new Product(10, "Product J", 1000)
  ];
  
  products.sort((a, b) => a.price - b.price);
  
  console.log("Danh sách products đã được sắp xếp tăng dần theo giá:");
  console.table(products);