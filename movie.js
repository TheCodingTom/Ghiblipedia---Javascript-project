const API_URL = "https://ghibliapi.vercel.app/films";

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get("id");
  fetchMovieDetails(movieId);
});

async function fetchMovieDetails(movieId) {
  try {
    const response = await fetch(`${API_URL}/${movieId}`);
    const movie = await response.json();
    displayMovieDetails(movie);
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
}

function displayMovieDetails(movie) {
  document.getElementById("movie-title").textContent = movie.title;
  document.getElementById("movie-description").textContent = movie.description;
  document.getElementById("movie-director").textContent = movie.director;
  document.getElementById("movie-producer").textContent = movie.producer;
  document.getElementById("movie-release-date").textContent =
    movie.release_date;
  document.getElementById("movie-rating").textContent = movie.rt_score;
}
