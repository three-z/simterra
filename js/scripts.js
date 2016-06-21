$(document).ready(function() {

	$('.fancybox').fancybox({
		'fitToView': false
	});

	$('.home-slider-list').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		arrows: true,
		infinite: true,
		speed: 500,
		adaptiveHeight: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: 'linear'
	});

	$('.home-advantages-tabs__list-item a').on('click', function(e) {
		e.preventDefault();

		$(this).closest('.home-advantages-tabs__list-item').addClass('home-advantages-tabs__list-item_active').siblings().removeClass('home-advantages-tabs__list-item_active');
		$($(this).attr('href')).addClass('home-advantages-list-item_active').siblings().removeClass('home-advantages-list-item_active');
		$('.home-advantages-hide').show();
	});

	$('.home-advantages-hide a').on('click', function(e) {
		e.preventDefault();

		$('.home-advantages-tabs__list-item').removeClass('home-advantages-tabs__list-item_active');
		$('.home-advantages-list-item').removeClass('home-advantages-list-item_active');
		$('.home-advantages-hide').hide();
	});

	$('.home-elements-list').slick({
		autoplay: false,
		autoplaySpeed: 5000,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		adaptiveHeight: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: 'linear'
	});

	$('.home-navigation__list-item a').on('click', function(e) {
		e.preventDefault();

		$('.home-elements-list').slick('slickGoTo', $(this).closest('.home-navigation__list-item').data('slide'));
	});

	$('.sidebar-auth-form__show-password').on('click', function(e) {
		e.preventDefault();

		var $input = $('.sidebar-auth-form__input_password');
		if ($input.attr('type') == 'text') {
			$input.attr('type', 'password');
		}
		else {
			$input.attr('type', 'text');
		}
	});

	var options = {
		ovalWidth: 380,
		ovalHeight: 50,
		offsetX: 100,
		offsetY: 325,
		angle: 0,
		activeItem: 0,
		duration: 350,
		className: 'order-products-select-slider__list-item'
	}

	var carousel = $('.order-products-select-slider__list').CircularCarousel(options);

	carousel.on('itemActive', function(e, item) {
		$('.order-products-select-content-list-item').hide();
		$('#order-products-select-content-' + $(item).data('slide')).show();
	});

	$('.order-products-select-slider__previous').click(function(e) {
		carousel.cycleActive('previous');
		e.preventDefault();
	});

	$('.order-products-select-slider__next').click(function(e) {
		carousel.cycleActive('next');
		e.preventDefault();
	});
});