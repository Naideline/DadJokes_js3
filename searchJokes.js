// para obtener una lista de chistes basados en una palabra clave
export async function searchJokes(keyword) {
  const response = await fetch(`https://icanhazdadjoke.com/search?term=${keyword}`, {
    headers: {
      'Accept': 'application/json'
    }
  });
  const data = await response.json();
  return data.results;
}