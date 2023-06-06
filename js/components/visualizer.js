import { productChange } from './other-products.js';
import { colorChange } from './colors.js';

const image = document.querySelector('#main-img');
const joke = document.querySelector('#main-joke');
let state = {
  color: 'white',
  product: 'shirt'
};

function updateImageSource() {
  const { product, color } = state;
  image.setAttribute('src', `img/product-${product}-${color}.jpg`);
}

function updateJokeClass() {
  const { color } = state;
  joke.classList.remove(`with-${state.color}-img`);
  joke.classList.add(`with-${color}-img`);
}

function handleProductChange(product) {
  state.product = product;
  updateImageSource();
}

function handleColorChange(color) {
  state.color = color;
  updateImageSource();
  updateJokeClass();
}

function initVisualizer() {
  productChange.subscribe(handleProductChange);
  colorChange.subscribe(handleColorChange);
}

export {
  initVisualizer
};
