class Accordion {

    /**
     * 
     * @param {HTMLElement} element 
     * @param {Object} options 
     */
    constructor(element, options = {}) {
        this.element = element;
        this.options = options;
        let children = [].slice.call(element.children);
        this.label = children[0];
        this.content = children[1];
        
        // Modif DOM
        this.label.classList.add('accordion-label');
        this.content.classList.add('accordion-content');

        // Events
        this.element.addEventListener('click', 
            () => this.element.classList.toggle('active'));
    }
}

let accordionOnReady = function () {
    // Get all elements with class "accordion"
    let accordions = document.getElementsByClassName('accordion');

    // Creating accordions
    for (let accordion of accordions) {
        new Accordion(accordion);
    }
}

if (document.readyState !== 'loading') {
    accordionOnReady();
}

document.addEventListener('DOMContentLoaded', accordionOnReady);