const barIcon = document.querySelector("#bar-icon");
const menu = document.querySelector("#menu");

barIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
});
