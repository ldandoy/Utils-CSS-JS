document.addEventListener('DOMContentLoaded', (event) => {
    let hiddens = document.getElementsByClassName('hide');

    document.addEventListener('scroll', (event) => {
        console.log(hiddens, window.scrollY);
        for (let hide of hiddens) {
            hide.classList.forEach(className => {
                if (className.includes('hide')) {
                    console.log(className.split('-')[1])
                    if (window.scrollY > className.split('-')[1]) {
                        hide.classList.add('show');
                        hide.classList.remove('hidden');
                    }

                    if (window.scrollY < className.split('-')[1]) {
                        console.log('passer');
                        hide.classList.remove('show');
                        hide.classList.add('hidden');
                    }
                }
            });
        }
    });
});