const burgerMenu = document.querySelector(".burger-menu");
const linksContainer = document.querySelector(".links-container");

const caretDirection = document.querySelectorAll(".caret");

burgerMenu.addEventListener("click", () => {
  linksContainer.classList.toggle("hide");
});

caretDirection.forEach((caret) => {
  caret.addEventListener("click", () => {
    caret.lastChild.classList.toggle("active");
  });
});
