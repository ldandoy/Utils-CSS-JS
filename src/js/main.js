class Carousel {

    /**
     * 
     * @param {HTMLElement} element 
     * @param {Object} options 
     * @param {number} options.slidesToScroll Nombre d'éléments à faire défiler 
     * @param {number} options.slidesVisible Nombre d'éléments visibles dans un slide
     * @param {boolean} options.loop Doit-on boucler en fin de slides
     * @param {boolean} options.pagination 
     */
    constructor (element, options = {}){
        this.element = element;
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1,
            loop: false,
            pagination: false
        }, options);
        let children = [].slice.call(element.children);
        this.mobile = false;
        this.currentItem = 0;
        this.moveCallbacks = [];

        // Modif DOM
        this.root = this.createDivWithClass('carousel-root');
        this.container = this.createDivWithClass('carousel-container');
        this.root.setAttribute('tabindex', '0');
        this.root.appendChild(this.container);
        this.element.appendChild(this.root);
        this.items = children.map((child) => {
            let item = this.createDivWithClass('carousel-item');
            item.appendChild(child);
            this.container.appendChild(item);
            return item
        });
        this.setStyle();
        this.crateNavigation();
        if (this.options.pagination) {
            this.cratePagination();
        }
        
        // Events
        this.moveCallbacks.forEach(cb => cb(0));
        this.onWindowResize();
        window.addEventListener('resize', this.onWindowResize.bind(this));
        this.root.addEventListener('keyup', (e) => {
            if(e.key === 'ArrowRight' || e.key === "Right") {
                this.next();
            } else if (e.key === 'ArrowLeft' || e.key === "Left") {
                this.prev();
            }
        });
    }

    /**
     * Applique les bonnes dimentions aux éléments
     */
    setStyle () {
        let ratio = this.items.length / this.slidesVisible;
        this.container.style.width = (ratio * 100) + "%";
        this.items.forEach(item => item.style.width = (100 / this.slidesVisible / ratio) + "%");
    }

    /**
     * Créer système de navigation
     */
    crateNavigation () {
        let nextButton = this.createDivWithClass('carousel-next');
        let prevButton = this.createDivWithClass('carousel-prev');
        this.root.appendChild(nextButton);
        this.root.appendChild(prevButton);
        nextButton.addEventListener('click', this.next.bind(this));
        prevButton.addEventListener('click', this.prev.bind(this));
        if (this.options.loop) {
            return;
        }
        this.onMove(index => {
            if (index === 0) {
                prevButton.classList.add('carousel-prev--hidden');
            } else {
                prevButton.classList.remove('carousel-prev--hidden');
            }
            if (this.items[this.currentItem + parseInt(this.slidesVisible)] === undefined) {
                nextButton.classList.add('carousel-next--hidden');
            } else {
                nextButton.classList.remove('carousel-next--hidden');
            }
        })
    }

    /**
     * Créer système de pagination
     */
    cratePagination () {
        let rootChildren = this.root.children;
        for(let oldPagi of rootChildren) {
            if (oldPagi.className === 'carousel-pagination') {
                this.root.removeChild(oldPagi);
            }
        }

        let pagination = this.createDivWithClass('carousel-pagination');
        let buttons = [];
        this.root.appendChild(pagination);
        for (let i = 0; i  <= this.items.length - this.slidesVisible || i - this.slidesToScroll < this.items.length - this.slidesVisible; i = i + parseInt(this.slidesToScroll)) {
            let button = this.createDivWithClass('carousel-pagination-btn');
            button.addEventListener('click', () => this.goToItem(i));
            pagination.appendChild(button);
            buttons.push(button);
        }
        this.onMove(index => {
            let activeButton = buttons[Math.round(index / this.slidesToScroll)];
            if (index < 0) {
                activeButton = buttons[buttons.length - 1];
            }
            if (activeButton) {
                buttons.forEach(button => button.classList.remove('carousel-pagination-btn--active'));
                activeButton.classList.add('carousel-pagination-btn--active');
            }
        })
    }

    next () {
        this.goToItem(this.currentItem + parseInt(this.slidesToScroll));
    }

    prev () {
        this.goToItem(this.currentItem - this.slidesToScroll);
    }

    /**
     * Déplacer le carousel vers l'élément ciblé
     * @param {number} index 
     */
    goToItem (index) {
        if (index < 0) {
            if (this.currentItem > 0){
                index = 0;
            } else {
                index = this.items.length - this.slidesVisible;
            }
        } else if (index >= this.items.length || (index > this.currentItem && this.items[this.currentItem + parseInt(this.slidesVisible)] === undefined)) {
            index = 0;
        }
        let translateX = index * -100 / this.items.length;
        this.container.style.transform = 'translate3d(' + translateX + '%, 0, 0)';
        this.currentItem = index;
        this.moveCallbacks.forEach(cb => cb(index));
    }

    /**
     * 
     * @param {moveCallback} cb 
     */
    onMove (cb) {
        this.moveCallbacks.push(cb);
    }

    /**
     * Gérer le responsive
     */
    onWindowResize () {
        let mobile = window.visualViewport.width < 800;
        if (mobile !== this.mobile) {
            this.mobile = mobile;
            this.setStyle();
            this.cratePagination();
            this.moveCallbacks.forEach(cb => cb(this.currentItem));
        }
    }

    /**
     * 
     * @param {string} className 
     * @return {HTMLElement}
     */
    createDivWithClass (className) {
        let div = document.createElement('div');
        div.setAttribute('class', className);
        return div
    }

    get slidesToScroll () {
        return this.mobile ? 1 : this.options.slidesToScroll;
    }

    get slidesVisible () {
        return this.mobile ? 1 : this.options.slidesVisible;
    }
}

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

let onReady = function () {
    // Get all elements with class "carousel"
    let carousels = document.getElementsByClassName('carousel');
    let accordions = document.getElementsByClassName('accordion');
    let toggles = document.getElementsByClassName('toggle');

    // Creating carousels
    for (let carousel of carousels) {
        let visible = 1;
        let toScroll = 1;
        let loop = false;
        let pagi = false;
        carousel.className.split(' ').forEach(className => {
            if(className.includes('visible')){
                visible = className.split('-')[1];
            }
            if(className.includes('scroll')){
                toScroll = className.split('-')[1];
            }
            if(className.includes('loop')){
                loop = true;
            }
            if(className.includes('pagi')){
                pagi = true;
            }
        });

        new Carousel(carousel, {
            slidesVisible : visible,
            slidesToScroll : toScroll,
            pagination : pagi,
            loop : loop
        });

    };

    // Creating accordions
    for (let accordion of accordions) {
        new Accordion(accordion);
    }

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
    onReady();
}

document.addEventListener('DOMContentLoaded', onReady);
