function getFilms() {
  fetch("https://ghibliapi.vercel.app/films")
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      const films = result;
      displayCards(films);
      createDropdown(films);
    })
    .catch((error) => {
      console.log(error);
    });
}

function displayCards(films) {
  const cardsContainer = document.querySelector(".row");
  for (let i = 0; i < films.length; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card col-sm-6 col-md-4 col-lg-3");
    cardContainer.classList.add("card");

    // cardContainer.setAttribute("style", "width: 18rem;");

    const cardImage = document.createElement("img"); // MAKE IMAGE SMALLER
    cardImage.setAttribute("src", films[i].image); // using the index to select all elements of the array and remember the structure of the data I'm using
    cardImage.setAttribute("alt", "image of a studio ghibli movie"); // double check if I find a better description
    cardImage.classList.add("card-image");

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title"); // alternative: cardTitle.classList.add("card-title")
    cardTitle.innerText = films[i].title;

    const cardText = document.createElement("p");
    cardText.setAttribute("class", "card-text");
    cardText.innerText = films[i].description;

    const cardLink = document.createElement("a");
    cardLink.setAttribute("href", "");
    cardLink.setAttribute("class", "btn btn-primary");
    cardLink.innerText = "Discover more";

    cardsContainer.appendChild(cardContainer);
    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardBody); // same level as the image - not a child of cardImage
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardLink);
  }
}

// 3. generate dropdown options

const createDropdown = (films) => {
  // get array of films by calling function in the fetch
  const dropdown = document.getElementById("directorDropdown");

  const directors = films.map((film) => {
    return film.director;
  });
  console.log(directors); // created an array using .map with all the directors name

  const setOfDirectors = new Set(directors); // created a set (different from array) to remove duplicates

  const singleDirectorsArray = [...setOfDirectors]; // created an array with [] and used spread (...) to go over each element of the set and put them one by one inside the new array

  console.log(singleDirectorsArray);

  for (let i = 0; i < singleDirectorsArray.length; i++) {
    // loop over the array to create options and assign them a value before appending it to the dropdown
    const option = document.createElement("option");
    option.innerText = singleDirectorsArray[i];
    option.value = singleDirectorsArray[i]; // value could be different so I need to understand this better
    dropdown.appendChild(option);
  }
};

getFilms();
