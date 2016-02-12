// jQuery and parallax.js

$(document).ready(function() {
    $('.parallax').parallax();
});

// jQuery and fullPage.js

$(document).ready(function() {
    $('#fullpage').fullpage({
        autoScrolling: false,
        fitToSection: false
    });
});

// Smooth scrolling

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});