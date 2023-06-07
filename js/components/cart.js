const cartButton = document.getElementById('cart-button');
const cart = document.getElementById('cart');
const cartCloseButton = document.getElementById('cart-close-button');

function toggleCart() {
  cart.classList.toggle('cart-open');
}

function openCart() {
  cart.classList.add('cart-open');
}

function closeCart() {
  cart.classList.remove('cart-open');
}

cartButton.addEventListener('click', toggleCart);
cartCloseButton.addEventListener('click', closeCart);

export { openCart, closeCart };

