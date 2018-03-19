/*
 * File: main.js
 * Description: This is the main JavaScript file for Sander's personal website.
 * Author: Sander Shi
 */

$(document).ready(function() {
    // Initial Animations
    $(".fixed-background-overlay").delay(800).animate({"opacity": "0.75"}, 800);
    $(".landing-page-content").css("display", "flex").hide().delay(1600).fadeIn(1200);
    $(".navbar").delay(1600).hide().fadeIn(1000);

    // Scrolling Changes
    $(".navbar").css("transition-duration", "0.3s").toggleClass("scrolled-navbar", $(this).scrollTop() > 20);
    $(document).scroll(function() {
        // Show Navigation Bar
        $(".navbar").css("transition-duration", "0.3s").toggleClass("scrolled-navbar", $(this).scrollTop() > 20);

        // Fade-in Text
        var $about = $(".about-me-content");
        var $hobbies = $(".hobbies-content");
        var $projects = $(".projects-content");
        var $contact = $(".contact");
        var bottom_of_about = $about.offset().top + 200;
        var bottom_of_hobbies = $hobbies.offset().top + 200;
        var bottom_of_projects = $projects.offset().top + 200;
        var bottom_of_contact = $contact.offset().top + 200;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_about) {
            $about.animate({opacity: 1}, 800);
        }
        if (bottom_of_window > bottom_of_hobbies) {
            $hobbies.animate({opacity: 1}, 800);
        }
        if (bottom_of_window > bottom_of_projects) {
            $projects.animate({opacity: 1}, 800);
        }
        if (bottom_of_window > bottom_of_contact) {
            $contact.animate({opacity: 1}, 800);
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

    // Navigation Bar
    var $nav = $("#nav-menu");
    var $canvas = $("#canvas");
    $nav.hide();
    $canvas.hide();
    $(".menu-button").click(function() {
        $nav.fadeIn(300);
        $canvas.fadeIn(300);
    });
    function closeNav() {
        $nav.fadeOut(300);
        $canvas.fadeOut(300);
    }
    $canvas.click(function() {
        closeNav();
    });
    $(".nav-link").click(function() {
        closeNav();
    });
});
