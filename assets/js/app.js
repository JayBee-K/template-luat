;(function ($) {
	'use strict';
	let windowWidth = $(window).width();

	let initNavigation = function () {
		console.log(1);
		if (windowWidth < 1200) {
			$(".header .header-navigation > ul > li > ul").each(function (index) {
				$(this).prev().attr({
					"href": "#subMenu" + index, "data-bs-toggle": "collapse"
				});
				$(this).attr({
					"id": "subMenu" + index, "class": "collapse list-unstyled mb-0", "data-bs-parent": "#hasMenu"
				});

				$(".header .header-navigation > ul > li > ul > li > ul").each(function (index2) {
					$(this).prev().attr({
						"href": "#subMenu_" + (index - 1) + '_' + index2,
						"data-bs-toggle": "collapse",
						'class': 'demo-collapse'
					});
					$(this).attr({
						"id": "subMenu_" + (index - 1) + "_" + index2,
						"class": "collapse list-unstyled mb-0",
						"data-bs-parent": "#subMenu" + (index - 1)
					});
				});
			});

			$('#call-navigation').click(function () {
				$('#header').toggleClass('is-navigation');
			});
			$('#header-overlay').click(function () {
				$('#header').removeClass('is-navigation');
				$('#header .collapse').collapse('hide');
			})
		}
	}

	let initSliderBanner = function () {
		if ($('#slider-banner').length > 0) {
			new Swiper('#slider-banner .swiper', {
				loop: false, effect: "fade", speed: 450, pagination: {
					el: '#slider-banner .slider-theme_actions--pagination', clickable: true,
				}, autoplay: {
					delay: 10000, disableOnInteraction: false,
				},
			});
		}
	}
	let initSliderArticle = function () {
		if ($('#slider-articles').length > 0) {
			new Swiper('#slider-articles .swiper', {
				loop: false, speed: 450, spaceBetween: 30, autoplay: {
					delay: 10000, disableOnInteraction: false,
				}, navigation: {
					nextEl: '#slider-articles .slider-theme_actions--next',
					prevEl: '#slider-articles .slider-theme_actions--prev',
				}, breakpoints: {
					1200: {
						slidesPerView: 4,
					}, 991: {
						slidesPerView: 3.3,
					}, 768: {
						slidesPerView: 2.3,
					}, 525: {
						slidesPerView: 1.5,
					}, 375: {
						slidesPerView: 1.3,
					}, 320: {
						slidesPerView: 1,
					},
				},
			});
		}
	}

	let initSliderCustomer = function () {
		if ($('#slider-partner').length > 0) {
			new Swiper('#slider-customer .swiper', {
				loop: false, speed: 450, spaceBetween: 15, autoplay: {
					delay: 10000, disableOnInteraction: false,
				}, pagination: {
					el: '#slider-customer .slider-theme_actions--pagination', clickable: true,
				}, breakpoints: {
					1200: {
						slidesPerView: 4,
					}, 991: {
						slidesPerView: 3,
					}, 768: {
						slidesPerView: 2,
					}, 375: {
						slidesPerView: 1.5,
					}, 320: {
						slidesPerView: 1,
					},
				},
			});
		}
	}

	let initSliderParnter = function () {
		if ($('#slider-partner').length > 0) {
			new Swiper('#slider-partner .swiper', {
				loop: false, speed: 450, spaceBetween: 15, autoplay: {
					delay: 10000, disableOnInteraction: false,
				}, pagination: {
					el: '#slider-partner .slider-theme_actions--pagination', clickable: true,
				}, breakpoints: {
					1200: {
						slidesPerView: 6,
					}, 991: {
						slidesPerView: 5.3,
					}, 768: {
						slidesPerView: 4.3,
					}, 525: {
						slidesPerView: 3.5,
					}, 375: {
						slidesPerView: 2.3,
					}, 320: {
						slidesPerView: 1,
					},
				},
			});
		}
	}

	$(function () {
		initNavigation();
		initSliderBanner();
		initSliderArticle();
		initSliderCustomer();
		initSliderParnter();
	});
})(jQuery);