// Obtener el chiste seleccionado del almacenamiento local
const selectedJoke = localStorage.getItem('selectedJoke');
if (selectedJoke) {
  const selectedJokeElement = document.getElementById('selected-joke');
  selectedJokeElement.textContent = selectedJoke;
}

import { getRandomJoke } from './apiUtils.js';

const randomJokeButton = document.getElementById('random-joke');

// Manejar el evento click en el botón de chiste aleatorio
async function handleRandomJokeClick() {
  const joke = await getRandomJoke();
  const randomJokeResult = document.getElementById('random-joke-result');
  randomJokeResult.textContent = joke;
}
randomJokeButton.addEventListener('click', handleRandomJokeClick);

const productOptionsContainer = document.querySelector('.product-options');

const productOptions = [
  {
    id: 'pillow',
    imageSrc: 'img/product-pillow-white.jpg',
    alt: 'Almohada',
  },
  {
    id: 'poster',
    imageSrc: 'img/product-poster-white.jpg',
    alt: 'Poster',
  },
  {
    id: 'phone-case',
    imageSrc: 'img/product-case-white.jpg',
    alt: 'Case',
  }
];

// Recorrer el array de opciones de productos y crear los botones dinámicamente
productOptions.forEach(option => {
  const button = document.createElement('button');
  button.id = option.id;
  button.innerHTML = `<img src="${option.imageSrc}" alt="${option.alt}" class="product-option">`;
  productOptionsContainer.appendChild(button);
});

const phoneCaseButton = document.getElementById('phone-case');

// Manejar el evento click en el botón de producto
phoneCaseButton.addEventListener('click', () => {
 
  console.log('Se hizo clic en el botón de la opción de producto');
});

// Colores disponibles
const colors = [
  { id: 'color-white', value: 'white' },
  { id: 'color-black', value: 'black' },
  // Agrega más opciones de color según tus necesidades
];

// Contenedor de opciones de color
const colorSelector = document.querySelector('.color-selector');

// Crear los elementos HTML para las opciones de color
colors.forEach(color => {
  const input = document.createElement('input');
  input.type = 'radio';
  input.name = 'color';
  input.id = color.id;
  input.value = color.value;
  if (color.id === 'color-white') {
    input.checked = true;
  }

  const label = document.createElement('label');
  label.setAttribute('for', color.id);
  label.classList.add('color-option', color.id);

  colorSelector.appendChild(input);
  colorSelector.appendChild(label);
});
