const burgerMenu = document.querySelector(".burger-menu");
const linksContainer = document.querySelector(".links-container");

burgerMenu.addEventListener("click", () => {
  linksContainer.classList.toggle("hide");
});

console.log(burgerMenu, linksContainer);
