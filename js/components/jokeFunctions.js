import { renderJokes } from './renderJokes.js';
import { getRandomJoke, searchJokes } from '../services/apiUtils.js';

export async function handleRandomJokeClick() {
  const joke = await getRandomJoke();
  const randomJokeResult = document.getElementById('random-joke-result');
  randomJokeResult.textContent = joke;
  localStorage.setItem('selectedJoke', joke);
}
const searchInput = document.getElementById('search-joke');

export async function handleSearchButtonClick() {
  const keyword = searchInput.value.trim();
  const searchResults = document.getElementById('search-results');

  if (keyword === '') {
    searchResults.innerHTML = '<p>Please enter a keyword</p>';
  } else {
    const jokes = await searchJokes(keyword);
    renderJokes(jokes, searchResults);
  }

  if (jokes.length > 0) {
    localStorage.setItem('selectedJoke', jokes[0].joke);
  }
}
