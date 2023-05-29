import { renderJokes } from '../js/renderJokes.js';
import { getRandomJoke, searchJokes } from './apiUtils.js';

// Obtener un chiste aleatorio
const randomJoke = await getRandomJoke();
console.log(randomJoke);

// Buscar chistes por palabra clave
const keyword = 'cat';
const searchResults = await searchJokes(keyword);
console.log(searchResults);

//acceden al html por el id
const randomJokeButton = document.getElementById('random-joke');
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-joke');

// Obtener los elementos del formulario
const form = document.getElementById('search-form');

// Manejar el evento submit del formulario
form.addEventListener('submit', async function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  const keyword = searchInput.value.trim();
  if (keyword === '') {
    jokeContainer.innerHTML = '<p>Please enter a keyword</p>';
  } else {
    const jokes = await searchJokes(keyword);
    const searchResults = document.getElementById('search-results');
    renderJokes(jokes, searchResults);
  }
});

// Manejar el evento click en el botón de chiste al azar
async function handleRandomJokeClick() {
  const joke = await getRandomJoke();
  const randomJokeResult = document.getElementById('random-joke-result');
  randomJokeResult.textContent = joke;
}

// Manejar el evento click en el botón de búsqueda
async function handleSearchButtonClick() {
  const keyword = searchInput.value.trim();
  const searchResults = document.getElementById('search-results');

  if (keyword === '') {
    searchResults.innerHTML = '<p>Please enter a keyword</p>';
  } else {
    const jokes = await searchJokes(keyword);
    renderJokes(jokes, searchResults);
  }
}

// Listeners de eventos
randomJokeButton.addEventListener('click', handleRandomJokeClick);
searchButton.addEventListener('click', handleSearchButtonClick);
