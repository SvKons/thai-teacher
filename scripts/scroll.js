'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 800,
        easing: 'ease-out',
        opacity: 0,
        viewFactor: 0.1,
        reset: false,
    });

    sr.reveal('.header', { delay: 30 });
    sr.reveal('.top__block', { delay: 100 });

    sr.reveal('.about__img-wrap', { delay: 50 });
    sr.reveal('.about__text-wrapper .second-title', { delay: 150 });
    sr.reveal('.about__text-wrapper .about__text-top', { delay: 250 });
    sr.reveal('.about__text-block .about__text', {
        delay: 150,
        interval: 100,
    });

    sr.reveal('.adventure__title', { delay: 100 });
    sr.reveal('.adventure__text', { delay: 200 });
    sr.reveal('.adventure__wrap-text', { delay: 300, interval: 150 });
    sr.reveal('.adventure__wrap', { delay: 400, interval: 200 });
    sr.reveal('.adventure__text:last-of-type', { delay: 500 });

    sr.reveal('.situations__title', { delay: 100 });
    sr.reveal('.situations__text-wrap', { delay: 150 });
    sr.reveal('.situations__blocks .situations__card', { delay: 150, interval: 100 });
    sr.reveal('.situations__text-bottom-wrap', { delay: 300 });

    sr.reveal('.lessons__title', { delay: 100 });
    sr.reveal('.lessons__img-wrap', { delay: 50 });
    sr.reveal('.lessons__bottom-text', { delay: 80 });
    sr.reveal('.lessons__top-block .lessons__item', { delay: 150, interval: 100 });
    sr.reveal('.lessons__bottom-block', { delay: 300 });

    sr.reveal('.choose__title', { delay: 100 });
    sr.reveal('.choose__grid .choose__block', { delay: 150, interval: 100 });

    sr.reveal('.questions__title', { delay: 100 });
    sr.reveal('.questions__list .questions__item', { delay: 150, interval: 100 });
});
