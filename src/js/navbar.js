document.addEventListener('DOMContentLoaded', (event) => {
    let navbar = document.querySelector('.navbar');
    let icon = document.querySelector('.navbar-menu-icon');

    if (icon) {
        icon.addEventListener("click", (event) => {
            navbar.classList.toggle('responsive');
        });
    }
});