console.log(movies);

function displayTitles(titlesArray) {
  const titlesContainer = document.querySelector(".movies-titles");

  for (let i = 0; i < titlesArray.length; i++) {
    const moviesTitle = document.createElement("h4");
    moviesTitle.innerText = titlesArray[i].title;
    titlesContainer.appendChild(moviesTitle);
  }
}

displayTitles(movies);
