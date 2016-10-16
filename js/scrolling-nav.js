//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//for darken on hover
$('.darken').hover(function() {
    $(this).find('img').fadeTo(100, 0.5);
}, function() {
    $(this).find('img').fadeTo(100, 1);
});

//for scrolling window
function scrollWin(x, y) {
  $('.cover').stop().animate({
    scrollLeft: '+=' + x,
    scrollTop: '+=' + y
  });
}
