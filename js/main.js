// jQuery and parallax.js

$(document).ready(function() {
    $('.parallax').parallax({imageSrc: '/images/profile.jpeg'});
});

// jQuery and fullPage.js

$(document).ready(function() {
    $('#fullpage').fullpage({
        autoScrolling: false,
        fitToSection: false
    });
});

// Smooth scrolling

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});