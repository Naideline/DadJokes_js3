import { colorChange } from "./colors";

const img = document.querySelector('#main-image');
const joke = document.querySelector('main-joke');
let state = {
    color: 'white' ,
    product: 'shirt'
};

function handleProductChange(product) {
    img.setAttribute('src', `images/product-${product}-${state.color}.jpg`);
    state.product = product;
}

function handleColorChange(color) {
    joke.setAttribute('src', `images/product-${state.product}-${color}.jpg`);
    joke.classList.add(`with-$`)
    state.color = color;
}

function initVisualizer() {
    productChange.subscribe(handleProductChange);
    colorChange.subscribe(handleColorChange);
}
export {
    initVisualizer
}