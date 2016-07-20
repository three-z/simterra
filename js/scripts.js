$(document).ready(function() {

	$('.fancybox').fancybox({
		'fitToView': false
	});

	$('.order-info-delivery__switch input[type="radio"], .cabinet-did-select__field select, .calculator-calls-select select, .calculator-internet-select select, .cabinet-history-phone select').styler();

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
		ovalWidth: 520,
		ovalHeight: 85,
		offsetX: 100,
		offsetY: 385,
		angle: 0,
		activeItem: 0,
		duration: 350,
		className: 'order-select-slider__list-item'
	};

	var carousel = $('.order-select-slider__list').CircularCarousel(options);

	carousel.on('itemActive', function(e, item) {
		$('.order-select-content-list-item').hide();
		$('#order-select-content-' + $(item).data('slide')).show();
	});

	$('.order-select-slider__previous').click(function(e) {
		carousel.cycleActive('previous');
		e.preventDefault();
	});

	$('.order-select-slider__next').click(function(e) {
		carousel.cycleActive('next');
		e.preventDefault();
	});

	$('.calculator-price__range input').ionRangeSlider({
		type: 'single',
		min: 0,
		max: 90,
		from: 45,
		onFinish: function (data) {
			if (typeof bindIonRangeSliderAjax === 'function')
				bindIonRangeSliderAjax(data.input[0]);
		}
	});

	$('.calculator-tabs__list-item a').on('click', function(e) {
		e.preventDefault();

		$(this).closest('.calculator-tabs__list-item').addClass('calculator-tabs__list-item_active').siblings().removeClass('calculator-tabs__list-item_active');
		$($(this).attr('href')).addClass('calculator-content__list-item_active').siblings().removeClass('calculator-content__list-item_active');
		$('.calculator-calls-select select, .calculator-internet-select select').trigger('refresh');
	});

	$('.cabinet-questions-list-item__show a').on('click', function(e) {
		e.preventDefault();

		$(this).closest('.cabinet-questions-list-item__show').toggleClass('cabinet-questions-list-item__show_active').closest('.cabinet-questions-list-item').find('.cabinet-questions-list-item__answer').toggle();
		$(this).find('span').hide();
		if ($(this).closest('.cabinet-questions-list-item__show').hasClass('cabinet-questions-list-item__show_active')) {
			$(this).find('.cabinet-questions-list-item__show-text-close').show();
		}
		else {
			$(this).find('.cabinet-questions-list-item__show-text-open').show();
		}
	});

	$('.calculator-calls-select__switch a').on('click', function(e) {
		e.preventDefault();

		var from = $('.calculator-calls-select__from select').val();
		var to = $('.calculator-calls-select__to select').val();

		$('.calculator-calls-select__from select').val(to).trigger('refresh');;
		$('.calculator-calls-select__to select').val(from).trigger('refresh');;
	});

	var dateMask = $('.cabinet-history-dates input[type="text"]').attr('placeholder').replace('_ _ - _ _ - _ _', '9 9 - 9 9 - 9 9');
	$('.cabinet-history-dates input[type="text"]').mask(dateMask);
});