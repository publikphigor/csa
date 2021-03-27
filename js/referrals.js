//payment modal
const openModal = document.querySelector('.wth-btn');
const paymentModal = document.querySelector('.p-modal');
const paymentOverlay = document.querySelector('.p-overlay');

const bankBtn = document.querySelector('.bk-tf');
const cryptoBtn = document.querySelector('.cp-tf');
const bankForm = document.querySelector('.bank');
const cryptoForm = document.querySelector('.crypto');

//open modal
openModal.onclick = ()=>{
    paymentModal.classList.add('active');
    paymentOverlay.classList.add('active');
}

paymentOverlay.onclick = ()=>{
    paymentOverlay.classList.remove('active');
    paymentModal.classList.remove('active');
}

bankBtn.onclick = ()=>{
    bankBtn.classList.add('active');
    cryptoBtn.classList.remove('active');
    bankForm.classList.remove('d-none');
    cryptoForm.classList.add('d-none');
};

cryptoBtn.onclick = ()=>{
    cryptoBtn.classList.add('active');
    bankBtn.classList.remove('active');
    cryptoForm.classList.remove('d-none');
    bankForm.classList.add('d-none');
};
