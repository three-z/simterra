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

	$('.home-events-list').slick({
		autoplay: false,
		autoplaySpeed: 5000,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 800,
		adaptiveHeight: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		variableWidth: true
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

	$(".glyphicon-eye-open").mousedown(function(){
	                $("#passwordfield").attr('type','text');
	            }).mouseup(function(){
	            	$("#passwordfield").attr('type','password');
	            }).mouseout(function(){
	            	$("#passwordfield").attr('type','password');
	            });
});