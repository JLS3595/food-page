$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navscroll').addClass("black");
        } else {
            $(".navscroll").removeClass("black");
        }
    });
});