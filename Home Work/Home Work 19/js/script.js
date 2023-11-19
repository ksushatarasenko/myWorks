const burger = document.querySelector(".nav-burger");
const menu = document.querySelector(".nav-menu");

burger.onclick = () => {
    menu.classList.toggle("show");
}