const addCourseBtn = document.querySelector('.add-course');
const cancelAddCourse = document.querySelector('.cancel-add-form');
const allCourses = document.querySelector('.mc-ul');
const addCourse = document.querySelector('.new-course');

const addModule = document.querySelector('.add-module');
const formModule = document.querySelector('.add-n-mod');

addCourseBtn.onclick = ()=>{
    addCourseBtn.classList.add('d-none');
    allCourses.classList.add('d-none');
    addCourse.classList.remove('d-none');
};

cancelAddCourse.onclick = ()=>{
    addCourseBtn.classList.remove('d-none');
    allCourses.classList.remove('d-none');
    addCourse.classList.add('d-none');
};

addModule.onclick = ()=>{
    formModule.innerHTML += `<div class="nc-split">
    <input type="text" placeholder="Module number">
    <input type="text" placeholder="Module Title">
</div>`
};