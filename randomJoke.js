// Función para obtener un chiste al azar
export async function getRandomJoke() {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    });
    const data = await response.json();
    return data.joke;
  }
  