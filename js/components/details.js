import { productChange } from './other-products.js';
import prices from './config.js';
import { colorChange } from './colors.js';

const title = document.querySelector('#product-title');
const price = document.querySelector('#product-price');
const joke = document.querySelector('#selected-joke');
let state = {
  color: 'white',
  product: 'shirt'
};

function updateDetails() {
  title.innerHTML = `${state.color} ${state.product} with joke`;
  price.innerHTML = `${prices[state.product][state.color]}`;
}

function handleProductChange(product) {
  state.product = product;
  updateDetails();
}

function handleColorChange(color) {
  state.color = color;
  updateDetails();
}

function initDetails() {
  productChange.subscribe(handleProductChange);
  colorChange.subscribe(handleColorChange);
  updateDetails();
}

export {
  initDetails
}
