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

let home = document.getElementById('home')
let about = document.getElementById('about')
let shop = document.getElementById('shop')
let reviews = document.getElementById('reviews')
let contacts = document.getElementById('contacts')

function activeShop() {
    shop.style.display = "block"
    about.style.display = "none"
    home.style.display = "none"
    reviews.style.display = "none"
    contacts.style.display = "none"
}
function back() {
    shop.style.display = "none"
    about.style.display = "block"
    home.style.display = "block"
    reviews.style.display = "block"
    contacts.style.display = "block"
}
