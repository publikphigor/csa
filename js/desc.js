//course description
const moduleBtn = document.querySelector('.md-b');
const descBtn = document.querySelector('.ds-b');
const outlineBtn = document.querySelector('.ot-b');
const moduleText = document.querySelector('.module');
const desc = document.querySelector('.desc');
const outline = document.querySelector('.outline');

moduleBtn.onclick = ()=>{
    moduleBtn.classList.add('active');
    descBtn.classList.remove('active');
    outlineBtn.classList.remove('active');

    moduleText.classList.remove('d-none');
    desc.classList.add('d-none');
    outline.classList.add('d-none');
};

descBtn.onclick = ()=>{
    descBtn.classList.add('active');
    moduleBtn.classList.remove('active');
    outlineBtn.classList.remove('active');

    desc.classList.remove('d-none');
    moduleText.classList.add('d-none');
    outline.classList.add('d-none');
};

outlineBtn.onclick = ()=>{
    outlineBtn.classList.add('active');
    descBtn.classList.remove('active');
    moduleBtn.classList.remove('active');

    outline.classList.remove('d-none');
    desc.classList.add('d-none');
    moduleText.classList.add('d-none');
};