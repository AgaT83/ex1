const burgerBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');

burgerBtn.addEventListener('click', () => {
navMobile.classList.toggle('nav-mobile--active');
burgerBtn.classList.toggle('is-active');
})