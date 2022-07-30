
let body = document.body;
let darkMode = document.body.querySelector(".darkMode")

darkMode.addEventListener("click",()=>{
  console.log("darmofe")
  body.classList.toggle("activeDarkMode")
})