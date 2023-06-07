class Product {
    constructor(title, color, price, joke) {
      this.title = title;
      this.color = color;
      this.price = price;
      this.joke = joke;
    }
  
    createMarkup() {
      // Crea el markup HTML para el producto en el carrito
      // Puedes utilizar las propiedades de la instancia para generar el HTML necesario
      const markup = `
        <div class="product-item">
          <h3>${this.title} - ${this.color}</h3>
          <p>Precio: $${this.price}</p>
          <p>Chiste: ${this.joke}</p>
          <button class="remove-button">Remove</button>
        </div>
      `;
      return markup;
    }
  }
  
  export default Product;
  