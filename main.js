// 1. get data

function getFilms() {
  fetch("https://ghibliapi.vercel.app/films")
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      const films = result;
      controller(films);
      console.log(films);
    })
    .catch((error) => {
      console.log(error);
    });
}

// 2. display data

function displayCards(films) {
  const cardsContainer = document.querySelector(".row");
  cardsContainer.innerText = "";
  for (let i = 0; i < films.length; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("id", films[i].id); // to create single pages
    cardContainer.setAttribute("class", "card col-sm-6 col-md-4 col-lg-3");
    const cardImage = document.createElement("img");
    cardImage.setAttribute("src", films[i].movie_banner); // using the index to select all elements of the array and remember the structure of the data I'm using
    cardImage.setAttribute("alt", "image of a studio ghibli movie");
    cardImage.classList.add("card-image");

    cardImage.addEventListener("click", () => {
      openMovieDetails(films[i].id); // added event listener based on movie id to redirect user to a new page about the selected movie
    });

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    const cardLink = document.createElement("button");
    cardLink.innerText = films[i].title;
    cardLink.classList.add("link");
    cardLink.addEventListener("click", () => {
      openMovieDetails(films[i].id); // added event listener based on movie id to redirect user to a new page about the selected movie
    });
    cardLink.innerText = films[i].title;

    cardsContainer.appendChild(cardContainer);

    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardBody); // same level as the image - not a child of cardImage
    cardBody.appendChild(cardLink);
  }
}

// 3. generate dropdown options

const createDropdown = (films) => {
  // get array of films by calling function in the fetch - or in the controller in my case
  const dropdown = document.getElementById("directorDropdown");

  const directors = films.map((film) => {
    return film.director;
  });
  // console.log(directors); // created a new array using .map with all the directors name

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

// 4. create controller function to handle the code in a better way

function controller(films) {
  // build cards with data
  displayCards(films);
  // generate dropdown filters options
  createDropdown(films);
  // set event listeners
  initialazeEvent(films);
  searchEventListener(films);
}

// 5. event listeners

const dropdownEventListener = (films) => {
  const directorDropdown = document.querySelector("#directorDropdown");
  directorDropdown.addEventListener("change", () => {
    applyFilters(films);
  });
};

const sortEventListeners = (films) => {
  const filmSort = document.getElementById("sortByBox");
  filmSort.addEventListener("change", (e) => {
    applyFilters(films);
  });
};

// 6. unified function to apply both filters

const applyFilters = (films) => {
  const selectedDirector = document.querySelector("#directorDropdown").value; // with .value we get the value of the option that has been selected
  const filmSortValue = document.getElementById("sortByBox").value;

  const filteredFilms = films.filter((film) => {
    return selectedDirector === film.director || selectedDirector === "all";
  });

  const sortedFilms = [...filteredFilms];
  if (filmSortValue === "default") {
    displayCards(films); // if I remove this if statement the default option still works, why?
  } else if (filmSortValue === "A-Z") {
    sortedFilms.sort((a, b) => a.title.localeCompare(b.title));
    displayCards(sortedFilms);
  } else if (filmSortValue === "Z-A") {
    sortedFilms.sort((a, b) => b.title.localeCompare(a.title));
    displayCards(sortedFilms);
  } else if (filmSortValue === "Release Year") {
    sortedFilms.sort((a, b) => b.release_date - a.release_date);
    displayCards(sortedFilms);
  } else if (filmSortValue === "Rating") {
    sortedFilms.sort((a, b) => b.rt_score - a.rt_score);
    displayCards(sortedFilms);
  } else if (filmSortValue === "Running Time")
    sortedFilms.sort((a, b) => b.running_time - a.running_time);
  displayCards(sortedFilms);
};

const initialazeEvent = (films) => {
  dropdownEventListener(films);
  sortEventListeners(films);
};

// 7. search

const searchEventListener = (films) => {
  const input = document.querySelector("#search-bar");

  input.addEventListener("input", (event) => {
    const searchText = event.target.value.toLowerCase(); // convert input to lower case
    const filteredFilms = films.filter(
      (film) => film.title.toLowerCase().includes(searchText) // match search text with movie title
    );
    displayCards(filteredFilms);
  });
};

getFilms();

function openMovieDetails(movieId) {
  window.location.href = `movie-page.html?id=${movieId}`; // used to get the current URL and to redirect the browser to a new page
}

//? only thing I'm not sure about window.location.href is "shouldn't the written url be the same as the current page?"
