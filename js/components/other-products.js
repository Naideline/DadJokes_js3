import config from './config.js';
import Publisher from '../publisher/Publisher.js';

const wrap = document.querySelector('#other-products-wrap');
const productChange = new Publisher();

function handleProductChange(event) {
  const selectedProductId = event.currentTarget.dataset.productid;
  productChange.publish(selectedProductId);
}

function createProductButton(productId) {
  const button = document.createElement('button');
  button.classList.add('other-products__btn');
  button.dataset.productid = productId;
  button.addEventListener('click', handleProductChange);
  button.innerHTML = `<img src="img/product-${productId}-white.jpg" alt="">`;
  wrap.appendChild(button);
}

function initProducts() {
  const products = Object.keys(config).slice(1);
  products.forEach(createProductButton);
}

export {
  initProducts,
  productChange
};
