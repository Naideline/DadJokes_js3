export async function fetchJokes(url) {
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json'
    }
  });
  const data = await response.json();
  return data;
}

// para obtener un chiste al azar
export async function getRandomJoke() {
  const url = 'https://icanhazdadjoke.com/';
  const data = await fetchJokes(url);
  return data.joke;
}

// para obtener una lista de chistes basados en una palabra clave
export async function searchJokes(keyword) {
  const url = `https://icanhazdadjoke.com/search?term=${keyword}`;
  const data = await fetchJokes(url);
  return data.results;
}
