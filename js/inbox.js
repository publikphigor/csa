const msgList = document.querySelectorAll('.ibx-li');
const msgArea = document.querySelector('.ibx-msg-ex');

const openMessage = ()=>{
    msgList.forEach(message => {
        message.addEventListener('click', (e)=>{
            clearActive();
            if(e.target.classList.contains('ibx.li')) {
                e.target.classList.toggle('active');
            } else {
                e.target.closest('.ibx-li').classList.toggle('active');
            }

            let username = message.querySelector('.ibx-m-name').innerText;
            let msgContent = message.querySelector('.ibx-msg').innerText;

            msgArea.querySelector('h3').innerText = `Dear ${username},`;
            msgArea.querySelector('p').innerText = msgContent;
        });
    });
};

openMessage();

function clearActive() {
    msgList.forEach(message =>{
        message.classList.remove('active');
    });
};