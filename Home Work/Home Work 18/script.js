const burger = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-bar__menu");

burger.onclick = () => {
    menu.classList.toggle("active");
};
