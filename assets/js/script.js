let home = document.getElementById('home')
let about = document.getElementById('about')
let shop = document.getElementById('shop')
let reviews = document.getElementById('reviews')
let contacts = document.getElementById('contacts')
let navbar = document.getElementById('navbar')
let main = document.getElementById('main')
let login_ = document.getElementById('login')

correctUsername = "admin"
correctPassword = "admin"

function signin() {
    let username = document.getElementById('username')
    let password = document.getElementById('password')
    if(correctUsername == username.value.trim() && correctPassword == password.value.trim()) {
        password.value = ""
        return true
    } else {
        return false
    }
}

function login(event) {
    event.preventDefault(); 
    if(signin()) {
        main.style.display = "block"
        navbar.style.display = "block"
        login_.style.display = "none"
    } else {
        alert("Invalid Email or Password")
        return false
    }
}

function visiblePassword() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  }

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

function confirmLogout(event) {
    event.preventDefault();

    let confirm_ = confirm("Are you sure you want to log out?")
    if (confirm_) {
        main.style.display = "none"
        navbar.style.display = "none"
        login_.style.display = "flex"
    }
}

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
