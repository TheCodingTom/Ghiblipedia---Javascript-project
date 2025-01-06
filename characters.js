function getPeople() {
  fetch("https://ghibliapi.vercel.app/people")
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      const locations = result;
      console.log(locations);
      displayCards(locations);
    })
    .catch((error) => {
      console.log(error);
    });
}

function displayCards(locations) {
  const cardsContainer = document.querySelector(".row");

  for (let i = 0; i < locations.length; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card col-sm-6 col-md-4 col-lg-3");

    const cardImage = document.createElement("img");
    cardImage.setAttribute("src", locations[i].url); // using the index to select all elements of the array and remember the structure of the data I'm using
    cardImage.setAttribute("alt", "image of a studio ghibli movie"); // double check if I find a better description
    cardImage.classList.add("card-image");

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    const cardTitle = document.createElement("h6");
    cardTitle.setAttribute("class", "card-title");

    cardTitle.innerText = locations[i].name;

    cardsContainer.appendChild(cardContainer);
    cardContainer.appendChild(cardImage);

    cardContainer.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
  }
}

getPeople();
