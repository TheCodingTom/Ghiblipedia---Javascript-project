console.log(movies);

function displayTitles(titlesArray) {
  const titlesContainer = document.querySelector(".movie-titles");

  for (let i = 0; i < titlesArray.length; i++) {
    const movieTitle = document.createElement("h4");
    movieTitle.innerText = titlesArray[i].title;
    titlesContainer.appendChild(movieTitle);
  }
}

// displayTitles(movies);
