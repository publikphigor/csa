const signIn = document.querySelector('.sign-in');
const signUp = document.querySelector('.sign-up');
const leftBox = document.querySelector('.left-box');
const rightBox = document.querySelector('.right-box');
const welcomeBack = document.querySelector('.welcome-back');
const helloFriend = document.querySelector('.hello-friend');
const createAccount = document.querySelector('.create-account');
const useAccount = document.querySelector('.use-account');
const title = document.querySelector('title');

// sign in //
signIn.addEventListener('click', () => {
    leftBox.classList.add('active');
    rightBox.classList.add('active');
    welcomeBack.classList.add('active');
    helloFriend.classList.add('active');
    createAccount.classList.add('active');
    useAccount.classList.add('active');
    title.textContent = `Create account | Crypto Space Academy`
});
//sign up//
signUp.addEventListener('click', () => {
    leftBox.style.transition = `transform 0.5s ease`;
    rightBox.style.transition = `transform 0.5s ease`;
    leftBox.classList.remove('active');
    rightBox.classList.remove('active');
    welcomeBack.classList.remove('active');
    helloFriend.classList.remove('active');
    createAccount.classList.remove('active');
    useAccount.classList.remove('active');
    title.textContent = `Login | Crypto Space Academy`;
});

