
const menuButton = document.getElementById("icon-navbar");
const navbarMenu = document.getElementById("navbarMenu");
const navbar = document.getElementsByClassName("home-navbar")[0];

function toggleMenu() {
    navbarMenu.classList.toggle("active");
    navbar.classList.toggle("activeMain");
    /* if (navbarMenu.classList.contains("active")) {
        navbar.style.backgroundColor = "rgb(14, 14, 14)";
        navbar.style.position = "fixed";
    }
    else {
        navbar.removeAttribute("style");
    } */

}



menuButton.addEventListener("click", toggleMenu);


