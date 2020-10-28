
// typing animation script

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
        
        if(this.scrollY > 20) {
            
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

/*------------ Mobile menu (Toggler btn) -------------*/

$(document).ready(function () {

    $('.navbar-toggler').click(function () {

        $('.navbar-toggler').toggleClass('change');
        /*$('nav').css('background', 'rgba(33, 34, 38, 0.8)');*/
        
    });

});

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
















