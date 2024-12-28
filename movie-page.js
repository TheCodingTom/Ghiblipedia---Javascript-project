const API_URL = "https://ghibliapi.vercel.app/films";

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get("id"); // check this one
  getMovieDetails(movieId);
});

function getMovieDetails(movieId) {
  fetch(`${API_URL}/${movieId}`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      const movie = result;
      console.log(movie);
      displayMovieDetails(movie);
    })
    .catch((error) => {
      console.log(error);
    });
}

function displayMovieDetails(movie) {
  document.getElementById("movie-title").textContent = movie.title;
  document.getElementById("movie-description").textContent = movie.description;
  document.getElementById("movie-director").textContent = movie.director;
  document.getElementById("movie-producer").textContent = movie.producer;
  document.getElementById("movie-release-date").textContent =
    movie.release_date;
  document.getElementById("movie-rating").textContent = movie.rt_score;
  document.getElementById("movie-banner").src = movie.movie_banner;
  document.getElementById("original-title").textContent = movie.original_title;
  document.getElementById("movie-time").textContent = movie.running_time;
}
