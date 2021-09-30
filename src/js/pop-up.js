class PopUp {

    /**
     * 
     * @param {HTMLElement} btn 
     * @param {HTMLElement} popUp 
     * @param {Object} options 
     * @param {number} options.speed //animation speed
     */
    constructor(btn, popUp, options = {}) {
        this.popUp = popUp;
        this.btn = btn;
        this.options = options;
        let children = [].slice.call(popUp.children);
        
        // Modif DOM
        this.popUp.classList.add('pop-up-container');
        let content = this.createDivWithClass('pop-up-content');
        let overlay = this.createDivWithClass('pop-up-overlay');
        this.popUp.appendChild(content);
        children.forEach(child => content.appendChild(child));
        popUp.appendChild(overlay);
        let closeBtn = document.createElement('button');
        closeBtn.setAttribute('class', 'pop-up-close-btn');
        closeBtn.innerHTML = '&times;';
        content.appendChild(closeBtn);
        content.style.transition = this.options.speed / 10 + "s";
        overlay.style.transition = this.options.speed / 10 + "s";

        //Events
        this.btn.addEventListener('click', 
            () => this.popUp.classList.toggle('active'));
        closeBtn.addEventListener('click', 
            () => this.popUp.classList.toggle('active'));
        overlay.addEventListener('click', 
            () => this.popUp.classList.toggle('active'));
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
}

let popOnReady = function () {
    // Get all elements with class "pop-up"
    let btns = document.getElementsByClassName('pop-up-btn');

    // Creating pop-ups
    for (let btn of btns) {
        let transitionSpeed = 3;

        btn.classList.forEach(className => {
            if(className.includes('speed')){
                transitionSpeed = parseInt(className.split('-')[1]);
            }
        });

        btn.classList.forEach(className => {
            if (className.includes('target')) {
                let popUp = document.getElementById(className.split('-')[1]);
                new PopUp(btn, popUp, {
                    speed : transitionSpeed,
                });
            }
        })
    }
}

if (document.readyState !== 'loading') {
    popOnReady();
}

document.addEventListener('DOMContentLoaded', popOnReady);
