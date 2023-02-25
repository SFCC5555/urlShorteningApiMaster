let menuIcon = document.querySelector('.menuIcon');
let menu = document.querySelector('.menu');

menuIcon.addEventListener('click',renderMenu);

function renderMenu() {
    menu.classList.toggle('inactive');
}