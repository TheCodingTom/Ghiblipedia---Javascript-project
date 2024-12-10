console.log(movies);

// fetch("https://ghibliapi.vercel.app/films")
//   .then((response) => {
//     // console.log(response);
//     resolvedResponse = response.json();
//     // console.log(resolvedResponse);
//     return resolvedResponse;
//   })
//   .then((result) => {
//     console.log(result);
//     const films = result;
//     buildMyCards(result);
//   });

// function buildMyCards(films) {
//   const cardsContainer = document.querySelector(".row");
//   for (let i = 0; i < films.length; i++) {
//     const cardContainer = document.createElement("p");
//     cardContainer.innerText = films[i].producer;

//     cardsContainer.appendChild(cardContainer);
//   }
// }

function displayCards(filmsArray) {
  const cardsContainer = document.querySelector(".row");

  for (let i = 0; i < filmsArray.length; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card col-sm-6 col-md-4 col-lg-3");
    cardContainer.classList.add("card");

    // cardContainer.setAttribute("style", "width: 18rem;");

    const cardImage = document.createElement("img"); // MAKE IMAGE SMALLER
    cardImage.setAttribute("src", filmsArray[i].image); // using the index to select all elements of the array and remember the structure of the data I'm using
    cardImage.setAttribute("alt", "image of a studio ghibli movie"); // double check if I find a better description
    cardImage.classList.add("card-image");

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title"); // alternative: cardTitle.classList.add("card-title")
    cardTitle.innerText = filmsArray[i].title;

    const cardText = document.createElement("p");
    cardText.setAttribute("class", "card-text");
    cardText.innerText = filmsArray[i].description;

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
// }

displayCards(movies);
