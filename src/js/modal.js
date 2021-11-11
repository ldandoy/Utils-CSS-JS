document.addEventListener('DOMContentLoaded', (event) => {
    let open = document.querySelector('.modal-open');
    if (open) {
        open.addEventListener("click", (event) => {
            event.preventDefault();
            let modal = document.querySelector('#' + open.getAttribute('target-modal'));
            modal.classList.add("active");
        });
        
        let close = document.querySelector('.modal-close');
        close.addEventListener("click", (event) => {
            event.preventDefault();
            close.parentElement.parentElement.parentElement.classList.remove('active');
        });
    }
});