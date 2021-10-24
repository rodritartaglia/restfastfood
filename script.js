
const navButton = document.getElementById("icon-navbar");
const navbarMenu = document.getElementById("navbarMenu");
const navbar = document.getElementsByClassName("home-navbar")[0];
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

let home = document.getElementById("homeNav");
let about = document.getElementById("aboutNav");
let menu = document.getElementById("menuNav");
let contact = document.getElementById("contactNav");

function toggleMenu() {
    navbarMenu.classList.toggle("active");
    navbar.classList.toggle("activeMain");
}

navButton.addEventListener("click", toggleMenu);
home.addEventListener("click", toggleMenu);
about.addEventListener("click", toggleMenu);
menu.addEventListener("click", toggleMenu);
contact.addEventListener("click", toggleMenu);

