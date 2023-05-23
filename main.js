import { getRandomJoke } from './randomJoke.js';
import { searchJokes } from './searchJokes.js';
import { renderJokes } from './renderJokes.js';

const randomJokeButton = document.getElementById('random-joke');
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-joke');

// Manejar el evento click en el botón de chiste al azar
async function handleRandomJokeClick() {
  const joke = await getRandomJoke();
  const randomJokeResult = document.getElementById('random-joke-result');
  randomJokeResult.textContent = joke;
}

// Manejar el evento click en el botón de búsqueda
async function handleSearchButtonClick() {
  const keyword = searchInput.value.trim();
  if (keyword === '') {
    jokeContainer.innerHTML = '<p>Please enter a keyword</p>';
  } else {
    const jokes = await searchJokes(keyword);
    const searchResults = document.getElementById('search-results');
    renderJokes(jokes, searchResults);
  }
}

// Listeners de eventos
randomJokeButton.addEventListener('click', handleRandomJokeClick);
searchButton.addEventListener('click', handleSearchButtonClick);
