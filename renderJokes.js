//verificaciones
export function renderJokes(jokes, jokeContainer) {
    if (jokes.length === 0) {
      jokeContainer.innerHTML = '<p>No jokes found, sorry :(</p>';
    } else if (jokes.length === 1) {
      jokeContainer.innerHTML = `<p>${jokes[0].joke}</p>`;
    } else {
      jokeContainer.innerHTML = '<ul>';
      jokes.forEach(joke => {
        jokeContainer.innerHTML += `<li>${joke.joke}</li>`;
      });
      jokeContainer.innerHTML += '</ul>';
    }
  }
  