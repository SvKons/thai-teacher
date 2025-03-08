'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('.animation__row');

    window.addEventListener('scroll', () => {
        const scrollOffset = window.scrollY;

        rows.forEach((row, index) => {
            const direction = index % 2 === 0 ? 1 : -1;
            row.style.transform = `translateX(${scrollOffset * 0.1 * direction}px)`;
        });
    });
});
