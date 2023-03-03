const burgerBtn = document.querySelector(".burger-menu");
const hamburger = document.querySelector(".burger");
const hamburgerExit = document.querySelector(".exit");
const nav = document.querySelector("ul");
const body = document.querySelector(".dim");



const handleNav = () => {
    nav.classList.toggle("active");
    hamburger.classList.toggle("dont-show")
    hamburgerExit.classList.toggle("show")
    body.classList.toggle("dim-background")
}

burgerBtn.addEventListener("click", handleNav);