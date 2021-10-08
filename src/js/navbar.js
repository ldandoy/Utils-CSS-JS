let navbar = document.querySelector('.navbar');
let icon = document.querySelector('.navbar-menu-icon');

const showNavbar = () => {
    navbar.classList.toggle('responsive');
};

icon.addEventListener("click", (event) => {
    showNavbar();
});