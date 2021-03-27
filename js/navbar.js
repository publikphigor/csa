//navbar slide out
const navbar = document.querySelector('.sidebar');
const burger = document.querySelector('.burger');

function showNav(navbar) {
    navbar.classList.toggle('active');
    burger.classList.toggle('active');
};

//display grid
const gridBtn = document.querySelector('.grid-btn');
const grid = document.querySelector('.pv-cont');

gridBtn.onclick = ()=>{
    gridBtn.classList.toggle('fa-th-large');
    gridBtn.classList.toggle('fa-list');
    grid.classList.toggle('grid');
};
