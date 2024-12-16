function addButtonEvent() {
  // 1. Locate html element
  const myButton = document.querySelector(".btn");

  // 2. Add the event listener
  myButton.addEventListener("click", function () {
    // alert("you clicked here");
  });
}
function changeButtonColor() {
  const myButton = document.querySelector(".btn");
  myButton.setAttribute("style", "color:red");
}

function changeButtonColor2() {
  const myButton = document.querySelector(".btn");
  const textColor = myButton.getAttribute("style");
  if (textColor === "color:red") {
    myButton.setAttribute("style", "color:yellow");
  }
}

function changeColorEvent() {
  const myButton = document.querySelector(".btn");
  myButton.addEventListener("mouseenter", changeButtonColor);
  myButton.addEventListener("mouseleave", changeButtonColor2); // isn't it better to do this with CSS?
}

addButtonEvent();
changeColorEvent();
