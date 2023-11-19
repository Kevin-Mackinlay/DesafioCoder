class ProductManager {
  static ultimoId = 0;

  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    ProductManager.ultimoId++;
    const newProduct = {
      id: ProductManager.ultimoId,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(newProduct);
  }

  getProductById(id) {
    const foundProduct = this.products.find((product) => product.id === id);
    if (!foundProduct) {
      console.error("Product not found");
    }
    return foundProduct;
  }
}

const manager = new ProductManager();
manager.addProduct('Shoes', 'for running and jumping', 20000, "", 330, 10)
manager.addProduct('shirt', 'for summer', 10000, "", 331, 20)
manager.addProduct('Pants', 'for the cold', 23000, "", 332, 14)
manager.addProduct('Shorts', 'for basketball', 25000, "", 333, 16)

const allProducts = manager.getProducts();
console.log(allProducts);

const productById = manager.getProductById(3);
console.log("Product con ID:", productById);