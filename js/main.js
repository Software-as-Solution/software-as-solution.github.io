$(function() {
    "use strict";
    // --- NAVIGATIONSLEISTE --- // 
    $(window).on('scroll', function (event) {
        let scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
            $(".navbar-area img").attr("src", "assets/images/logo.svg");
        } else {
            $(".navbar-area").addClass("sticky");
            $(".navbar-area img").attr("src", "assets/images/logo-2.svg");
        }
    });
    // --- LINK ACTIVE NAVIGATIONSLEISTE --- //
    let scrollLink = $('.page-scroll');
    $(window).scroll(function () {
        let scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function () {
            let sectionOffset = $(this.hash).offset().top - 73;
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
    // --- TOGGLE NAVIGATIONSLEISTE --- //
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });
    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });
    // --- SCROLLING ANIMATION --- //
    $(function() {
        $('a.page-scroll[href*="#"]:not([href="#"])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                let target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top -60)
                    }, 1200, "easeInOutExpo");
                    return false;
                }
            }
        });
    });
    // --- UNSERE SCHLIEßFÄCHER --- //
    $('.container').imagesLoaded(function () {
        let $grid = $('.grid').isotope({
            transitionDuration: '1s'
        });
        $('.schliessfach-nav ul').on('click', 'li', function () {
            let filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        $('.schliessfach-nav ul li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });
    // --- KUNDENMEINUNG --- //
    $('.meinung-aktiv').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 1,
    });
    // --- STANDORT --- // 
    $('.container-slide').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: true,
                    autoplay: true,
                    slidesToScroll: 1,
                    autoplaySpeed: 5000,
                    speed: 800,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: true,
                    autoplay: true,
                    slidesToScroll: 1,
                    autoplaySpeed: 5000,
                    speed: 800,
                    slidesToShow: 1,
                }
            }
        ]
      });
    // --- NACH GANZ OBEN --- //
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.oben').fadeIn(200)
        } else{
            $('.oben').fadeOut(200)
        }
    });
    // --- ANIMATION NACH GANZ OBEN --- //
    $('.oben').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
});