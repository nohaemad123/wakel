/*global $ , console , alert , document, window */
$(function () {
    'use strict';
    jQuery(".cover h1").fitText(1.5);
    $('[data-toggle="popover"]').popover();

    $('.carousel').carousel({
        interval: 2000
    })
});
