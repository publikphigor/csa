const courseList = document.querySelectorAll('.course-list label');
const buttons = document.querySelectorAll('.desc-cont input');

const myFunc = ()=> {
    courseList.forEach((course, index) => {
        course.addEventListener('click', ()=> {
            myFunc();
            course.classList.add('.checked');
            buttons.forEach((button, index)=> {
                if(buttons[index].checked) {
                    courseList[index].classList.remove('checked');
                } else {
                    course.classList.add('checked');
                }
            });
        });
        
    });
};

window.onload = myFunc();


//course slider on mobile
let number = 1;
setInterval(function(){
    document.querySelector(`#slide${number}`).checked = true;
    number++;
    if (number > 4){
        number=1;
    }
}, 4000);

const form = document.querySelector('.contact-form');
const overlay = document.querySelector('.overlay');
const thanks = document.querySelector('.thanks');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    overlay.classList.add('active');
    thanks.classList.add('active');

    overlay.addEventListener('click', ()=> {
        overlay.classList.remove('active');
        thanks.classList.remove('active');
    });
});