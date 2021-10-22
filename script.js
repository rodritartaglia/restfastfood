
const menuButton = document.getElementById("icon-navbar");
const navbar = document.getElementById("navbarMenu");

function toggleMenu() {
    navbar.classList.toggle("active");
}

menuButton.addEventListener("click",toggleMenu);


