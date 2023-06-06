import { handleRandomJokeClick, handleSearchButtonClick } from './components/jokeFunctions.js';
import { handleFormSubmit } from './components/formFunctions.js';
import { getRandomJoke, searchJokes } from './services/apiUtils.js';

const randomJokeButton = document.getElementById('random-joke');
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-joke');
const form = document.getElementById('search-form');

// Obtener un chiste aleatorio
const randomJoke = await getRandomJoke();
console.log(randomJoke);

const keyword = 'cat';
const searchResults = await searchJokes(keyword);
console.log(searchResults);

// Manejar el evento submit del formulario
form.addEventListener('submit', handleFormSubmit);

// Listeners de eventos
randomJokeButton.addEventListener('click', handleRandomJokeClick);
searchButton.addEventListener('click', handleSearchButtonClick);
