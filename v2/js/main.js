/*
 * File: main.js
 * Description: This is the main JavaScript file for Sander's personal website.
 * Author: Sander Shi
 */

$(document).ready(function() {
    // Initial Animations
    $(".image-overlay").delay(500).animate({"opacity": "0.75"}, 500);
    $(".landing-page-content").css("display", "flex").hide().delay(1000).fadeIn(1000);

    // Navbar Change on Scroll
    $(document).scroll(function() {
        $(".navbar").toggleClass("scrolled-navbar", $(this).scrollTop() > 20);
    });

    // Smooth Scrolling
    var $root = $('html, body');
    $('a[href^="#"]').click(function() {
        $root.animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 500);
        return false;
    })
});
