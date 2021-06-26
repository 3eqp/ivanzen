$(document).ready(function () {
    var logo = $('.floating-logo');

    // Show header after scroll to Top
    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > 500) {
            if (st > lastScrollTop) {
                logo.removeClass('active');
            } else {
                logo.addClass('active');
            }
            lastScrollTop = st;
        } else {
            logo.removeClass('active');
        }
    });

    // Animate to Top on Logo click
    logo.on('click', function () {
        $('html, body').animate({
            scrollTop: $('.main__container').offset().top
        });
        return false;
    });

    $('.works-button').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.works__container').offset().top
        });
        return false;
    });

});