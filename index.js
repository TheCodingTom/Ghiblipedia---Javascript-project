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
  myButton.addEventListener("mouseleave", changeButtonColor2); //  can't we do this only with CSS?
}

addButtonEvent();
changeColorEvent();

function showMoreText() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function showMoreEvent() {
  const myButton = document.querySelector(".btn");
  myButton.addEventListener("click", showMoreText);
}

showMoreEvent();
