import { getRandomJoke } from '../services/apiUtils.js';

export async function getRandomJokeAndUpdate() {
  const joke = await getRandomJoke();
  const randomJokeResult = document.getElementById('random-joke-result');
  randomJokeResult.textContent = joke;
}
