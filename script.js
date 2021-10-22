
const menuButton = document.getElementById("icon-navbar");
const navbarMenu = document.getElementById("navbarMenu");
const navbar = document.getElementsByClassName("home-navbar")[0];

function toggleMenu() {
    navbarMenu.classList.toggle("active");
}



menuButton.addEventListener("click", function () {
    toggleMenu();
    if (navbar.style.backgroundColor == "#0e0e0e") {
        navbar.style.backgroundColor = "transparent";
        navbar.style.position = "";
    }
    else {
        navbar.style.backgroundColor = "#0e0e0e";
        navbar.style.position = "fixed";
    };
}
);


