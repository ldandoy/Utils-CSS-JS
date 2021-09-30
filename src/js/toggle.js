class Toggle {

    /**
     * 
     * @param {HTMLElement} toggle 
     * @param {HTMLElement} target 
     * @param {Object} options 
     */
    constructor(toggle, target, options = {}) {
        this.target = target;
        this.toggle = toggle;
        this.options = options;

        // Modif DOM
        this.target.classList.add('toggle-target');

        //Events
        this.toggle.addEventListener('click', 
            () => this.target.classList.toggle('active'));
    }
}

let toggleOnReady = function () {
    // Get all elements with class "toggle"
    let toggles = document.getElementsByClassName('toggle');

    // Creating toggles
    for (let toggle of toggles) {
        toggle.classList.forEach(className => {
            if (className.includes('target')) {
                let target = document.getElementById(className.split('-')[1]);
                new Toggle(toggle, target);
            }
        })
    }
}

if (document.readyState !== 'loading') {
    toggleOnReady();
}

document.addEventListener('DOMContentLoaded', toggleOnReady);
