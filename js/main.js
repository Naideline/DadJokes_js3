import { handleRandomJokeClick, handleSearchButtonClick } from './components/jokeFunctions.js';
import { handleFormSubmit } from './components/formFunctions.js';
import { getRandomJoke, searchJokes } from './services/apiUtils.js';
import { openCart, closeCart } from './components/cart.js';

// Obtener un chiste aleatorio
const randomJoke = await getRandomJoke();

const keyword = 'cat';
const searchResults = await searchJokes(keyword);

const randomJokeButton = document.getElementById('random-joke');
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-joke');
const form = document.getElementById('search-form');

form.addEventListener('submit', handleFormSubmit);

randomJokeButton.addEventListener('click', handleRandomJokeClick);
searchButton.addEventListener('click', handleSearchButtonClick);

