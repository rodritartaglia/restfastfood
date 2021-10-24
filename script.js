
const navButton = document.getElementById("icon-navbar");
const navbarMenu = document.getElementById("navbarMenu");
const navbar = document.getElementsByClassName("home-navbar")[0];
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
const sliderImage = document.getElementsByClassName("slider-image")[0];
let dots = document.getElementsByClassName("dot");

let home = document.getElementById("homeNav");
let about = document.getElementById("aboutNav");
let menu = document.getElementById("menuNav");
let contact = document.getElementById("contactNav");

let profileCont = 0;



function toggleMenu() {
    navbarMenu.classList.toggle("active");
    navbar.classList.toggle("activeMain");
}

function next() {
    let marginValue = sliderImage.style.marginLeft;
    sliderImage.style.marginLeft = (parseInt(marginValue) - 100) + "%";
    profileCont++

}

function prev() {
    let marginValue = sliderImage.style.marginLeft;
    sliderImage.style.marginLeft = (parseInt(marginValue) + 100) + "%";
    profileCont--
}


function checkBtn() {
    if (profileCont == dots.length - 1) {
        btnRight.style.display = "none";
    } else {
        btnRight.style.display = "block";
    }

    if (profileCont == 0) {
        btnLeft.style.display = "none";
    } else {
        btnLeft.style.display = "block";
    }
}

function dotColor(){
    for (let index = 0; index < dots.length; index++) {
        dots[index].style.removeProperty("background-color");
    }

    dots[profileCont].style.backgroundColor = "#fff"
}

sliderImage.style.marginLeft = "0%";
dots[0].style.backgroundColor = "#fff"


navButton.addEventListener("click", toggleMenu);
home.addEventListener("click", toggleMenu);
about.addEventListener("click", toggleMenu);
menu.addEventListener("click", toggleMenu);
contact.addEventListener("click", toggleMenu);

btnRight.addEventListener("click", function() {
    next();
    checkBtn();
    dotColor()
});

btnLeft.addEventListener("click", function() {
    prev();
    checkBtn();
    dotColor()

});

