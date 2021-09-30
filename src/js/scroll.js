class Scroll {

    /**
     * 
     * @param {HTMLElement} scroll
     * @param {Object} options 
     * @param {number} options.hide px where element scroll stops hidding 
     */
    constructor(scroll, options = {}) {
        this.scroll = scroll;
        this.options = options;

        // Modif DOM
        this.scroll.style.transition = '0.5s';

        //Events
        document.addEventListener('scroll', () => {
            var y = window.scrollY;
            if (y >= this.options.hide) {
                this.scroll.style.opacity = 1;
            } else {
                this.scroll.style.opacity = 0;
            }
        })
    }
}

let scrollOnReady = function () {
    // Get all elements with class "scroll"
    let scrolls = document.getElementsByClassName('scroll');

    // Creating scrolls
    for (let scroll of scrolls) {
        let hideLimit = 50;
        scroll.classList.forEach(className => {
            if (className.includes('hide')) {
                hideLimit = className.split('-')[1];
            }
        })
        new Scroll(scroll, {hide : hideLimit});
    }
}

if (document.readyState !== 'loading') {
    scrollOnReady();
}

document.addEventListener('DOMContentLoaded', scrollOnReady);
