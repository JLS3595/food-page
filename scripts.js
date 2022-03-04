$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll < 200) {

            $('.navbar').removeClass('navbar-black-background');
        } else {

            $('.navbar').addClass('navbar-black-background');
        }

    })


})

