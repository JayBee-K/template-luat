;(function ($) {
    'use strict';
    let windowWidth = $(window).width();

    let initSliderBanner = function () {
        if ($('#slider-banner').length > 0) {
            new Swiper('#slider-banner .swiper', {
                loop: false,
                effect: "fade",
                speed: 450,
                pagination: {
                    el: '#slider-banner .slider-theme_actions--pagination',
                    clickable: true,
                },
                autoplay: {
                    delay: 10000,
                    disableOnInteraction: false,
                },
            });
        }
    }
    let initSliderArticle = function () {
        if ($('#slider-articles').length > 0) {
            new Swiper('#slider-articles .swiper', {
                loop: false,
                speed: 450,
                spaceBetween: 30,
                autoplay: {
                    delay: 10000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: '#slider-articles .slider-theme_actions--next',
                    prevEl: '#slider-articles .slider-theme_actions--prev',
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 3.3,
                    },
                    768: {
                        slidesPerView: 2.3,
                    },
                    525: {
                        slidesPerView: 1.5,
                    },
                    375: {
                        slidesPerView: 1.3,
                    },
                    320: {
                        slidesPerView: 1,
                    },
                },
            });
        }
    }

    $(function () {
        initSliderBanner();
        initSliderArticle();
    });
})(jQuery);