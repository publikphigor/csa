//navbar slide out
const navbar = document.querySelector('.sidebar');
const burger = document.querySelector('.burger');

function showNav(navbar) {
    navbar.classList.toggle('active');
    burger.classList.toggle('active');
};