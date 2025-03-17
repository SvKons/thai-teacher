'use strict';

$(document).ready(function () {
    const $rows = $('.animation__row');

    $(window).on('scroll', function () {
        const scrollOffset = $(window).scrollTop();

        $rows.each(function (index) {
            const direction = index % 2 === 0 ? 1 : -1;
            $(this).css('transform', `translateX(${scrollOffset * 0.1 * direction}px)`);
        });
    });
});
