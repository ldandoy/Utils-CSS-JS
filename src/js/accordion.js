document.addEventListener('DOMContentLoaded', (event) => {
    let accordions = document.getElementsByClassName('accordion');

    for (let accordion of accordions) {
        accordion.addEventListener('click', (event) => {
            event.preventDefault();
            let parent = event.target.parentElement;
            parent.classList.toggle('active');
        });
    }
});