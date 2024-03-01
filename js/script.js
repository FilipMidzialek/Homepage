let buttonElement = document.querySelector(".js-buttonElement");
let bodyElement = document.querySelector(".js-bodyElement");
let changeColor =
 document.querySelector(".js-changeColor")

buttonElement.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  
  changeColor.innerText= bodyElement.classList.contains("dark") ? "jasny" : "ciemny";
});

let section__button = document.querySelector(".js-RemoveHeadlineButton")
let section__paragraph = document.querySelector(".js-section__paragraph")

section__button.addEventListener("click", () => {
    section__paragraph.remove()
    section__button.remove()
});