const API_URL = "https://ghibliapi.vercel.app/films";

const movieVideos = {
  "2baf70d1-42bb-4437-b551-e5fed5a87abe": ["8ykEy-yPBFc"],
  "12cfb892-aac0-4c5b-94af-521852e46d6a": ["4vPeTSRd580"],
  "58611129-2dbc-4a81-a72f-77ddfc1b1b49": ["92a7Hj0ijLs"],
  "ea660b10-85c4-4ae3-8a5f-41cea3648e3e": ["4bG17OYs-GA"],
  "4e236f34-b981-41c3-8c65-f8c9000b94e7": ["OfkQlZArxw0"],
  "ebbb6b7c-945c-41ee-a792-de0e43191bd8": ["awEC-aLDzjs"],
  "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c": ["_7cowIHjCD4"],
  "ff24da26-a969-4f0e-ba1e-a122ead6c6e3": ["0pVkiod6V0U"],
  "0440483e-ca0e-4120-8c50-4c8cd9b965d6": ["4OiMOHRDs14"],
  "45204234-adfd-45cb-a505-a8e7a676b114": ["1C9ujuCPlnY"],
  "dc2e6bd1-8156-4886-adff-b39e6043af0c": ["ByXuk9QqQkk"],
  "90b72513-afd4-4570-84de-a56c312fdf81": ["Gp-H_YOcYTM"],
  "cd3d059c-09f4-4ff3-8d63-bc765a5184fa": ["iwROgK94zcM"],
  "112c1e67-726f-40b1-ac17-6974127bb9b9": ["8hxYx3Jq3kI"],
  "758bf02e-3122-46e0-884e-67cf83df1786": ["pfGDfDjAdSE"],
  "2de9426b-914a-4a06-a3a0-5e6d9d3886f6": ["9CtIXPhPo0g"],
  "45db04e4-304a-4933-9823-33f389e8d74d": ["9nzpk_Br6yo"],
  "67405111-37a5-438f-81cc-4666af60c800": ["TXuswYJFrDM"],
  "578ae244-7750-4d9f-867b-f3cd3d6fecf4": ["W71mtorCZDw"],
  "5fdfb320-2a02-49a7-94ff-5ca418cae602": ["ksNEwaQN53g"],
  "d868e6ec-c44a-405b-8fa6-f7f0f8cfb500": ["Sw7BggqBpTk"],
  "790e0028-a31c-4626-a694-86b7a8cada40": ["_PfhotgXEeQ"],
};

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
      displayMovieVideos(movieId);
    })
    .catch((error) => {
      console.log(error);
    });
}

function displayMovieDetails(movie) {
  document.getElementById("movie-title").textContent = movie.title;
  document.getElementById("movie-description").textContent = movie.description;
  document.getElementById("movie-director").textContent = movie.director;
  // document.getElementById("movie-producer").textContent = movie.producer;
  document.getElementById("movie-release-date").textContent =
    movie.release_date;
  // document.getElementById("movie-rating").textContent = movie.rt_score;
  document.getElementById("movie-banner").src = movie.image;
  document.getElementById("original-title").textContent =
    movie.original_title + " - " + movie.original_title_romanised;
  document.getElementById("romanised-title").textContent =
    movie.original_title_romanised;
  document.getElementById("movie-time").textContent = movie.running_time;
}

function displayMovieVideos(movieId) {
  const videoContainer = document.getElementById("video-container");

  const videoIds = movieVideos[movieId];
  console.log(movieVideos);
  console.log(videoIds);
  if (videoIds && videoIds.length > 0) {
    videoIds.forEach((videoId) => {
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${videoId}`;

      iframe.allowFullscreen = true;
      videoContainer.appendChild(iframe);
    });
  } else {
    const noVideosMessage = document.createElement("p");
    noVideosMessage.textContent = "No videos available.";
    videoContainer.appendChild(noVideosMessage);
  }
}
