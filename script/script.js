const burgerMenu = document.querySelector(".burger-menu");
const linksContainer = document.querySelector(".links-container");

const caretDirection = document.querySelectorAll(".caret");
const features = document.querySelector(".features");
const company = document.querySelector(".company");

burgerMenu.addEventListener("click", () => {
  linksContainer.classList.toggle("hide");
});

caretDirection.forEach((caret) => {
  caret.addEventListener("click", () => {
    caret.lastChild.classList.toggle("active");
  });
});

features.addEventListener("click", () => {
  document.getElementById("features-menu").classList.toggle("unhide");
});

company.addEventListener("click", () => {
  document.getElementById("company-menu").classList.toggle("unhide");
});
