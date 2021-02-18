const dslider = document.querySelector('.slider');
const dslides = document.querySelectorAll(".slide");

const mslider = document.querySelector('.m-slider');
const mslides = document.querySelectorAll(".m-slide");


let n = 0;
function nextSlide(slider, slides) {
    n++;
    slider.style.transform = `translateX(${-n * 33.33}%)`;
    slider.style.transition = `transform 0.5s ease`;
    if (n === slides.length){
        n = -1;
    }
}

function prevSlide(slider, slides) {
    n--;
    slider.style.transform = `translateX(${-n * 33.33}%)`;
    slider.style.transition = `transform 0.5s ease`;
    if (n < 0){
        n = slides.length;
    }
}