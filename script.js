const btnToggle = document.querySelector(".toggle-btn");
const btnToggleBar1 = document.querySelector(".toggle-btn-bar-1");
const btnToggleBar2 = document.querySelector(".toggle-btn-bar-2");
const btnToggleBar3 = document.querySelector(".toggle-btn-bar-3");
const navMenuEl = document.querySelector(".header__nav--menu");

let navMenuActive = false;


btnToggle.addEventListener('click', () => {
    console.log("Logged!");
    btnToggleBar1.classList.toggle('active');
    btnToggleBar2.classList.toggle('active');
    btnToggleBar3.classList.toggle('active');
    navMenuEl.classList.toggle("active");
});