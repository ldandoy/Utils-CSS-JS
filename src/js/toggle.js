document.addEventListener('DOMContentLoaded', (event) => {
    let toggles = document.getElementsByClassName('toggle');

    for (let toggle of toggles) {
        let targets = document.querySelectorAll("." + toggle.getAttribute('target-show'));
        
        for (let target of targets) {
            target.classList.add('toggle-target');
        }

        targets = document.querySelectorAll("." + toggle.getAttribute('target-hide'));
        
        for (let target of targets) {
            target.classList.add('toggle-target');
        }
        
        toggle.addEventListener('click', (event) => {
            event.preventDefault();
            let targetsShow = document.querySelectorAll("." + toggle.getAttribute('target-show'));
            for (let target of targetsShow) {
                target.classList.toggle('active');
            }

            let targetsHide = document.querySelectorAll("." + toggle.getAttribute('target-hide'));
            for (let target of targetsHide) {
                target.classList.toggle('active');
            }
        });
    }
});
