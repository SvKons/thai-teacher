document.addEventListener('DOMContentLoaded', function () {
    let header = document.getElementById('myHeader');
    let page = document.getElementById('page');
    let openMenuButton = document.getElementById('openmenu');

    window.addEventListener('scroll', function () {
        page.classList.remove('menuopen');
        if (window.scrollY >= 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    openMenuButton.addEventListener('click', function () {
        header.classList.remove('sticky');
        page.classList.add('menuopen');
    });

    let links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                });
            }
        });
    });
});
