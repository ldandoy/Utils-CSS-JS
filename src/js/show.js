document.addEventListener('DOMContentLoaded', (event) => {
    let shows = document.getElementsByClassName('show');

    for (let show of shows) {
        let targets = document.querySelectorAll("." + show.getAttribute('target-show'));
        
        for (let target of targets) {
            target.classList.add('show-target');
        }
        
        show.addEventListener('click', (event) => {
            event.preventDefault();
            let targetsShow = document.querySelectorAll("." + show.getAttribute('target-show'));
            for (let target of targetsShow) {
                target.classList.toggle('active');
            }
        });
    }
});
