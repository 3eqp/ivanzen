$('.floating-logo').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.main__container').offset().top
    });
    return false;
});