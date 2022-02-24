
const navButton = document.getElementById("icon-navbar");
const navbarMenu = document.getElementById("navbarMenu");
const navbar = document.getElementsByClassName("home-navbar")[0];
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
const sliderImage = document.getElementsByClassName("slider-image")[0];
let dots = document.getElementsByClassName("dot");
const profileTitles = document.getElementsByClassName("profileTitles");

let home = document.getElementById("homeNav");
let about = document.getElementById("aboutNav");
let menu = document.getElementById("menuNav");
let contact = document.getElementById("contactNav");

let menuBtns = document.getElementsByClassName("btnMenu");
let menuSections = document.getElementsByClassName("pc-section");

let profileCont = 0;




profileTitles[0].style.display = "block";



function toggleMenu() {
    navbarMenu.classList.toggle("active");
    navbar.classList.toggle("activeMain");
}

function next() {
    let marginValue = sliderImage.style.marginLeft;
    sliderImage.style.marginLeft = (parseInt(marginValue) - 100) + "%";
    sliderImage.style.transition = "all 0.5s";
    profileCont++;

    for (let index = 0; index < profileTitles.length; index++) {
        profileTitles[index].style.display = "none";
    }

    profileTitles[profileCont].style.display = "block";

}

function prev() {
    let marginValue = sliderImage.style.marginLeft;
    sliderImage.style.marginLeft = (parseInt(marginValue) + 100) + "%";
    sliderImage.style.transition = "all 0.5s";
    profileCont--

    for (let index = 0; index < profileTitles.length; index++) {
        profileTitles[index].style.display = "none";
    }

    profileTitles[profileCont].style.display = "block";
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

function dotColor() {
    for (let index = 0; index < dots.length; index++) {
        dots[index].style.removeProperty("background-color");
    }

    dots[profileCont].style.backgroundColor = "#fff"
}


function initMap() {
    const coord = { lat: -34.5575894, lng: -58.5522184 };

    const map = new google.maps.Map(document.getElementById("contact-map"),
        {
            zoom: 10,
            center: coord
        });

    const marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}

function showMenuSelection() {
    for (let index = 0; index < menuSections.length; index++) {
        menuSections[index].style.display = "none";
        menuBtns[index].style.removeProperty("color");
        menuBtns[index].children[0].style.display = "none";
    }
}

sliderImage.style.marginLeft = "0%";
dots[0].style.backgroundColor = "#fff";
menuBtns[0].style.color = "#fff";
menuBtns[0].children[0].style.display = "block";

btnRight.addEventListener("click", function () {
    next();
    checkBtn();
    dotColor()
});

btnLeft.addEventListener("click", function () {
    prev();
    checkBtn();
    dotColor()

});

if (window.innerWidth < 769) {
    showMenuSelection();

    menuSections[0].style.removeProperty("display");
    menuBtns[0].style.color = "#fff"
    menuBtns[0].children[0].style.display = "block";

    menuBtns[0].addEventListener("click", function () {
        showMenuSelection();

        menuSections[0].style.removeProperty("display");
        menuBtns[0].style.color = "#fff"
        menuBtns[0].children[0].style.display = "block";
    })

    menuBtns[1].addEventListener("click", function () {
        showMenuSelection();

        menuSections[1].style.removeProperty("display");
        menuBtns[1].style.color = "#fff"
        menuBtns[1].children[0].style.display = "block";
    })

    menuBtns[2].addEventListener("click", function () {
        showMenuSelection();

        menuSections[2].style.removeProperty("display");
        menuBtns[2].style.color = "#fff"
        menuBtns[2].children[0].style.display = "block";
    })

    menuBtns[3].addEventListener("click", function () {
        showMenuSelection();

        menuSections[3].style.removeProperty("display");
        menuBtns[3].style.color = "#fff"
        menuBtns[3].children[0].style.display = "block";
    })

    menuBtns[4].addEventListener("click", function () {
        showMenuSelection();

        menuSections[4].style.removeProperty("display");
        menuBtns[4].style.color = "#fff"
        menuBtns[4].children[0].style.display = "block";
    })




    navButton.addEventListener("click", toggleMenu);
    home.addEventListener("click", toggleMenu);
    about.addEventListener("click", toggleMenu);
    menu.addEventListener("click", toggleMenu);
    contact.addEventListener("click", toggleMenu);

} else {
    showMenuSelection();

    menuSections[0].style.removeProperty("display");
    menuBtns[0].style.color = "#fff"
    menuBtns[0].children[0].style.display = "block";

    menuBtns[0].addEventListener("click", function () {
        showMenuSelection();

        menuSections[0].style.removeProperty("display");
        menuBtns[0].style.color = "#fff"
        menuBtns[0].children[0].style.display = "block";
    })

    menuBtns[1].addEventListener("click", function () {
        showMenuSelection();

        menuSections[1].style.removeProperty("display");
        menuBtns[1].style.color = "#fff"
        menuBtns[1].children[0].style.display = "block";
    })

    menuBtns[2].addEventListener("click", function () {
        showMenuSelection();

        menuSections[2].style.removeProperty("display");
        menuBtns[2].style.color = "#fff"
        menuBtns[2].children[0].style.display = "block";
    })

    menuBtns[3].addEventListener("click", function () {
        showMenuSelection();

        menuSections[3].style.removeProperty("display");
        menuBtns[3].style.color = "#fff"
        menuBtns[3].children[0].style.display = "block";
    })

    menuBtns[4].addEventListener("click", function () {
        showMenuSelection();

        menuSections[4].style.removeProperty("display");
        menuBtns[4].style.color = "#fff"
        menuBtns[4].children[0].style.display = "block";
    })
}

window.onscroll = function () {
    if (document.documentElement.scrollTop >= 200) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }
}


