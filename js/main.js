const searchBtn = document.querySelector('.search-btn');
const openSearchBtn = document.querySelector('.open-search');
const closeSearchBtn = document.querySelector('.close-search');
const search = document.querySelector('.m-search');
const overlay = document.querySelector('.overlay');
const navbar = document.querySelector('.m-navbar');
const closeNavbar = document.querySelector('.close-nav-btn');
const burger = document.querySelector('#burger');

searchBtn.onclick = ()=> {
    search.classList.toggle('active');
    closeSearchBtn.classList.toggle('d-none');
    openSearchBtn.classList.toggle('d-none');
};

burger.onclick = ()=> {
    navbar.classList.add('active');
    closeNavbar.classList.add('active');
    overlay.classList.add('active');
};

closeNavbar.onclick = ()=> {
    navbar.classList.remove('active');
    closeNavbar.classList.remove('active');
    overlay.classList.remove('active');
};

overlay.onclick = ()=> {
    navbar.classList.remove('active');
    closeNavbar.classList.remove('active');
    overlay.classList.remove('active');
};


const loginBtn = document.querySelector('.switch1');
const signupBtn = document.querySelector('.switch2');
const loginPage = document.querySelector('.l-form');
const signupPage = document.querySelector('.s-form');

loginBtn.onclick = ()=> {
    loginPage.classList.remove('d-none');
    signupPage.classList.add('d-none');
    console.log('works');
};

signupBtn.onclick = ()=> {
    loginPage.classList.add('d-none');
    signupPage.classList.remove('d-none');
    console.log('works');

};