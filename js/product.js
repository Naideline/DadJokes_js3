import { getRandomJoke } from './services/apiUtils.js';
import { initVisualizer } from './components/visualizer.js';
import { initDetails } from './components/details.js';
import { initProducts } from './components/other-products.js';
import { initColors } from './components/colors.js';
import { openCart, closeCart } from './components/cart.js';

const randomJokeButton = document.getElementById('random-joke');

// Manejar el evento click en el botón de chiste aleatorio
const handleRandomJokeClick = async () => {
  const joke = await getRandomJoke();
  const randomJokeResult = document.getElementById('random-joke-result');
  randomJokeResult.textContent = joke;
};

// no se usa localStorage se usa el id (in progress...)
const selectedJoke = localStorage.getItem('selectedJoke');
if (selectedJoke) {
  const selectedJokeElement = document.getElementById('selected-joke');
  selectedJokeElement.textContent = selectedJoke;
}

randomJokeButton.addEventListener('click', handleRandomJokeClick);

initVisualizer();
initDetails();
initProducts();
initColors();

