document.addEventListener('DOMContentLoaded', (event) => {
    // Get all elements with class "toggle"
    let toggles = document.getElementsByClassName('toggle');

    // Creating toggles
    for (let toggle of toggles) {
        let targets = document.querySelectorAll("." + toggle.getAttribute('target-show'));
        
        // Hide the target
        for (let target of targets) {
            target.classList.add('toggle-target');
        }

        targets = document.querySelectorAll("." + toggle.getAttribute('target-hide'));
        
        // Hide the target
        for (let target of targets) {
            target.classList.add('toggle-target');
        }
        
        // Add event to display target on click
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
