const burgerBtn = document.querySelector(".hamburger");
const navMobile = document.querySelector(".nav-mobile");
const navLinks = document.querySelectorAll(".nav__link");
const burgerBars = document.querySelector(".hamburger-inner");
const allSections = document.querySelectorAll(".section");
const footerYear = document.querySelector(".footer__year");
const body = document.querySelector('body');

const handleNav = () => {
	navMobile.classList.toggle("nav-mobile--active");
	burgerBtn.classList.toggle("is-active");
    body.classList.toggle('stop-scroll');
};

navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		navMobile.classList.remove("nav-mobile--active");
		burgerBtn.classList.remove("is-active");
        body.classList.toggle('stop-scroll');
	});
}); 

const handleObserver = () => {
    const currentSection = window.scrollY;

    allSections.forEach(section => {
        if(section.classList.contains('white-section') && section.offsetTop <= currentSection) {
            burgerBars.classList.add('dark-hamburger');
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection){
            burgerBars.classList.remove('dark-hamburger');
        }
    })
}

const handleFooterYear = () => {
    let year = (new Date).getFullYear();
footerYear.innerText = year;
}

handleFooterYear();
burgerBtn.addEventListener("click", handleNav);
window.addEventListener('scroll', handleObserver);
