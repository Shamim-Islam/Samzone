/*------------ typing animation script -------------*/
$(window).on('load', function () {

    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');

});

/*------------ typing animation script -------------*/

var typed = new Typed(".typing", {
    strings: ["Web Designer.", "Web Developer.", "Freelancer."],
    typeSpeed: 50,
    backSpeed: 40,
    stratDelay: 1000,
    backDelay: 1000,
    loop: true
});

/*------------ Sticky-navbar -------------*/

$(document).ready(function () {

    $(window).scroll(function () {

        if (this.scrollY > 150) {

            $('.navbar').addClass('sticky-navbar');
            // show back to top btn
            $('#back-to-top').fadeIn();

        } else {

            $('.navbar').removeClass('sticky-navbar');
            // hide back to top btn
            $('#back-to-top').fadeOut();
        }
    })

});

/*------------ Mobile menu (Pure Javascript) -------------*/

//function toggleMenu() {
//    var menuToggle = document.querySelector('.toggle');
//    var navmenu = document.querySelector('.navbar-nav');
//    menuToggle.classList.toggle('change');
//    navmenu.classList.toggle('nav-active');
//} 


/*$(document).ready(function () {
   
    $(window).scroll(function () {
        
        if ($(window).scrollTop() > 150) {
            
            // show back to top btn
            $('#back-to-top').fadeIn();
            
        } else {
            
            // hide back to top btn
            $('#back-to-top').fadeOut();
        }
    })
    
});*/

/*------------ Mobile menu (jQuery) -------------*/

$(document).ready(function () {

    // show/hide mobile navbar
    $('.toggle').click(function () {

        $('.toggle').toggleClass('change');
        $('.navbar-nav').toggleClass('nav-active');

    });

    // close mobile navbar to click navlink 
    $('.nav-link').click(function () {

        $('.toggle').toggleClass('change');
        $('.navbar-nav').toggleClass('nav-active');

    });

});

//$(document).ready(function ($) {
//    
//    /* toggle nav */
//    $(".toggle").on("click", function () {
//        $(".navbar-nav").slideToggle();
//        $(this).toggleClass("change");
//    });
//
//    $(".navbar-nav").on("click", "li", function () {
//        $(".navbar-nav").slideToggle();
//        $(".toggle").click();
//    });
//
//});

/*------------ smooth-scroll -------------*/

$(document).ready(function () {

    $('a.smooth-scroll').click(function (event) {

        event.preventDefault();

        // get section id 
        var section_id = $(this).attr('href');

        $('html, body').animate({

            scrollTop: $(section_id).offset().top - 57

        }, 1250, 'easeInOutExpo');

    });

});

/*------------ Progress bar -------------*/

$(function () {

    $('.progress-elements').waypoint(function () {

        $('.progress-bar').each(function () {

            $(this).animate({

                width: $(this).attr('aria-valuenow') + '%'

            }, 100);

        });

        this.destroy();

    }, {
        offset: 'bottom-in-view'
    });

});

/*------------ Clients slideshow -------------*/

$(document).ready(function () {

    $("#slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left">', '<i class="fas fa-angle-right">']
    });

});