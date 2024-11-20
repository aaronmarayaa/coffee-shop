function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const burger = document.querySelector('.burger');
    navMenu.classList.toggle('show');

    if (navMenu.classList.contains('show')) {
        burger.innerHTML = '&times;';
    } else {
        burger.innerHTML = '&#9776;';
    }
}
document.addEventListener("scroll", () => {
    const navbar = document.getElementById("navMenu");

    // Get the vertical scroll position
    const scrollPosition = window.scrollY;

    // Determine the color based on the section in view
    if (scrollPosition < document.getElementById("home").offsetTop) {
      navbar.style.color = "rgba(0, 0, 255, 0.7)"; // Home
    } else if (scrollPosition < document.getElementById("about").offsetTop) {
      navbar.style.color = "rgba(0, 128, 0, 0.7)"; // Shop
    } else {
      navbar.style.color = "rgba(255, 0, 0, 0.7)"; // About
    }
});



let home = document.getElementById('navhome')
let about = document.getElementById('navabout')
let shop = document.getElementById('navshop')
let reviews = document.getElementById('navreviews')
let contacts = document.getElementById('navcontacts')


function activeHome() {
    home.style.color = "#A64B2A"
    about.style.color = "#FFEBC1"
    shop.style.color = "#FFEBC1"
    reviews.style.color = "#FFEBC1"
    contacts.style.color = "#FFEBC1"
    
}
function activeAbout() {
    about.style.color = "#A64B2A"
    home.style.color = "#FFEBC1"
    shop.style.color = "#FFEBC1"
    reviews.style.color = "#FFEBC1"
    contacts.style.color = "#FFEBC1"
}
function activeShop() {
    shop.style.color = "#A64B2A"
    about.style.color = "#FFEBC1"
    home.style.color = "#FFEBC1"
    reviews.style.color = "#FFEBC1"
    contacts.style.color = "#FFEBC1"
}
function activeReviews() {
    reviews.style.color = "#A64B2A"
    about.style.color = "#FFEBC1"
    shop.style.color = "#FFEBC1"
    home.style.color = "#FFEBC1"
    contacts.style.color = "#FFEBC1"
}
function activeContacts() {
    contacts.style.color = "#A64B2A"
    about.style.color = "#FFEBC1"
    shop.style.color = "#FFEBC1"
    reviews.style.color = "#FFEBC1"
    home.style.color = "#FFEBC1"
}