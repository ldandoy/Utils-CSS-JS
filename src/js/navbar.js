document.addEventListener('DOMContentLoaded', (event) => {
    let navbar = document.querySelector('.navbar');
    let icon = document.querySelector('.navbar-menu-icon');

    icon.addEventListener("click", (event) => {
        navbar.classList.toggle('responsive');
    });
});