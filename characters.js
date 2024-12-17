function getPeople() {
  fetch("https://ghibliapi.vercel.app/people")
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      const characters = result;
      console.log(characters);
    })
    .catch((error) => {
      console.log(error);
    });
}

getPeople();
