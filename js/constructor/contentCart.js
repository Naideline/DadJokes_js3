class Cart {
    constructor() {
      this.products = [];
      this.cartElement = document.getElementById('cart-content');
    }
  
    addProduct(product) {
      this.products.push(product);
      this.renderCart();
      this.updateLocalStorage();
    }
  
    removeProduct(index) {
      this.products.splice(index, 1);
      this.renderCart();
      this.updateLocalStorage();
    }
  
    clearCart() {
      this.products = [];
      this.renderCart();
      this.updateLocalStorage();
    }
  
    renderCart() {
      // Renderiza los productos en el carrito
      const markup = this.products.map((product, index) => {
        return product.createMarkup(index);
      }).join('');
      this.cartElement.innerHTML = markup;
  
      // Agrega eventos para los botones de remover
      const removeButtons = document.querySelectorAll('.remove-button');
      removeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
          this.removeProduct(index);
        });
      });
    }

    open() {
        // Muestra el carrito
        document.getElementById('cart').classList.add('open');
      }

    updateLocalStorage() {
      // Actualiza el contenido del carrito en el almacenamiento local (localStorage)
      localStorage.setItem('cart', JSON.stringify(this.products));
    }
  
    loadFromLocalStorage() {
      // Carga los productos del carrito desde el almacenamiento local (localStorage)
      const cartItems = JSON.parse(localStorage.getItem('cart'));
      if (cartItems) {
        this.products = cartItems;
        this.renderCart();
      }
    }
  }
  
  export default Cart;
  