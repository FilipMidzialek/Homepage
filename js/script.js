{
  const changeBackground = () => {
    const body = document.querySelector(".js-bodyElement");
    const changeColor = document.querySelector(".js-changeColor");
  
    body.classList.toggle("dark");
    changeColor.innerText= body.classList.contains ? "jasny" : "ciemny"
   };
  
   const init = () => {
    const buttonElement = document.querySelector(".js-buttonElement");
    buttonElement.addEventListener ("click", changeBackground);
   };
  
   init();
  
}
 
