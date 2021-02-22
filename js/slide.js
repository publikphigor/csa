const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let i = 0;

showSlides();

function showSlides() {
    slider.style.transform = `translateX(${-i * 33.33}%)`;
    slider.style.transition = `0.5s ease`;
    i++;

    if(i === slides.length) {
        i = 0;
    };
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}


//team image slider
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const checker = document.querySelectorAll('.t-slider input');
const images = document.querySelectorAll('.t-slider > img');

let counter = 0;
const active = images[counter];

nextBtn.onclick = ()=> {
    images.forEach(image => {
        image.classList.remove('current');
    })
    const active = images[counter];
    active.classList.add('current');
    counter++;
    if (counter === images.length) {
        counter = 0;
    }
};

prevBtn.onclick = ()=> {
    images.forEach(image => {
        image.classList.remove('current');
    })
    const active = images[counter];
    active.classList.add('current');
    counter--;
    if (counter === 0) {
        counter = images.length;
    }
};