import prices from "../config.js";

const title = document.querySelector('#product-tittle');
const price = document.querySelector('#product-price');
const joke = document.querySelector('#random-joke-result');

function initDetails () {
    productChange.subscribe(handleProductChange);
}

export {
    initDetails
}