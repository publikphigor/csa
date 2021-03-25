const allCourseBtn = document.querySelector('.c-1');
const compCourseBtn = document.querySelector('.c-2');
const favCourseBtn = document.querySelector('.c-3');
const allCourse = document.querySelector('.all-c');
const compCourse = document.querySelector('.comp-c');
const favCourse = document.querySelector('.fav-c');

allCourseBtn.onclick = ()=>{
    allCourseBtn.classList.add('active');
    compCourseBtn.classList.remove('active');
    favCourseBtn.classList.remove('active');
    allCourse.classList.remove('d-none');
    compCourse.classList.add('d-none');
    favCourse.classList.add('d-none');
};

compCourseBtn.onclick = ()=>{
    compCourseBtn.classList.add('active');
    allCourseBtn.classList.remove('active');
    favCourseBtn.classList.remove('active');
    compCourse.classList.remove('d-none');
    allCourse.classList.add('d-none');
    favCourse.classList.add('d-none');
};

favCourseBtn.onclick = ()=>{
    favCourseBtn.classList.add('active');
    compCourseBtn.classList.remove('active');
    allCourseBtn.classList.remove('active');
    favCourse.classList.remove('d-none');
    compCourse.classList.add('d-none');
    allCourse.classList.add('d-none');
};
