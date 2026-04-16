const nav = document.querySelector("nav");
const open_nav = document.querySelector(".open-nav");
let active = true;

function toggleNav() {
    if (active) {
        openNav();
    }
    else {
        closeNav();
    }
}

function openNav() {
    active = false;
    nav.style.transform = "translateX(0)";
    open_nav.querySelector("i").classList.remove("fa-bars");
    open_nav.querySelector("i").classList.add("fa-xmark");
    open_nav.classList.add("style1");
}
function closeNav() {
    active = true;
    nav.style.transform = "translateX(-100%)";
    open_nav.querySelector("i").classList.add("fa-bars");
    open_nav.querySelector("i").classList.remove("fa-xmark");
    open_nav.classList.remove("style1");
}