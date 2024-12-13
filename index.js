function addButtonEvent() {
  // 1. Locate html element
  const myButton = document.querySelector(".btn");

  // 2. Add the event listener
  myButton.addEventListener("click", function () {
    alert("you clicked here");
  });
}
function changeButtonColor() {
  const myButton = document.querySelector(".btn");
  myButton.setAttribute("style", "color:red");
}

function changeColorEvent() {
  const myButton = document.querySelector(".btn");
  myButton.addEventListener("mouseover", changeButtonColor);
}

addButtonEvent();
changeColorEvent();
