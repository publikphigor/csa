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
    addCourse.querySelector('.nc-submit input').value = 'Add course';
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
</div>
<input type="text" placeholder="Link to video" class="mb-3">`
};

//edit course button
let editCont = document.querySelectorAll('.c-burg');
editCont.forEach(editCont => {
    editCont.onclick = ()=>{
        let editPopup = editCont.closest('.mc-li').querySelector('.edit-course');
        editPopup.classList.toggle('d-none');
    };
});

let editBtn = document.querySelectorAll('.edit-btn');
editBtn.forEach(editBtn => {
    editBtn.onclick = ()=>{
        addCourseBtn.classList.add('d-none');
        allCourses.classList.add('d-none');
        addCourse.classList.remove('d-none');
        addCourse.querySelector('.nc-submit input').value = 'Edit course';
    };
});