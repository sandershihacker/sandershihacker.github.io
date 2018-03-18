/*
 * File: main.js
 * Description: This is the main JavaScript file for Sander's personal website.
 * Author: Sander Shi
 */

$(document).ready(function() {
    // Initial Animations
    $(".fixed-background-overlay").delay(800).animate({"opacity": "0.75"}, 800);
    $(".landing-page-content").css("display", "flex").hide().delay(1600).fadeIn(1200);

    // Scrolling Changes
    $(document).scroll(function() {
        // Show Navigation Bar
        $(".navbar").toggleClass("scrolled-navbar", $(this).scrollTop() > 20);

        // Fade-in Text
        var $about = $(".about-me-content");
        var $hobbies = $(".hobbies-content");
        var bottom_of_about = $about.offset().top + 200;
        var bottom_of_hobbies = $hobbies.offset().top + 200;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_about) {
            $about.animate({opacity: 1}, 800);
        }
        if (bottom_of_window > bottom_of_hobbies) {
            $hobbies.animate({opacity: 1}, 800);
        }
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
