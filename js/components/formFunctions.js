export async function handleFormSubmit(event) {
    event.preventDefault(); // Evitar el envío del formulario
    const keyword = searchInput.value.trim();
    if (keyword === '') {
      jokeContainer.innerHTML = '<p>Please enter a keyword</p>';
    } else {
      const jokes = await searchJokes(keyword);
      const searchResults = document.getElementById('search-results');
      renderJokes(jokes, searchResults);
    }
  }


  