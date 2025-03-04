'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('.feature-grid > .row');

    window.addEventListener('scroll', () => {
        const scrollOffset = window.scrollY;

        rows.forEach((row, index) => {
            const direction = index % 2 === 0 ? 1 : -1; // Чередуем направление
            row.style.transform = `translateX(${scrollOffset * 0.2 * direction}px)`;
        });
    });
});
