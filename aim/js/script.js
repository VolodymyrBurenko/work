// --- Header Hamburger ---

const hamburger = document.querySelector(".hamburger");
const headerMenu = document.querySelector(".header__menu");

hamburger.addEventListener("click",  () => { 
   hamburger.classList.toggle("active");
   headerMenu.classList.toggle("active");
})

document.querySelectorAll(".header__link").forEach(n => n.addEventListener("click", () => {
   hamburger.classList.remove("active");
   headerMenu.classList.remove("active");
}))