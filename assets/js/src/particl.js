/*! particl.io v1.0 | Author: Martin Allien <martin@particl.io> */

$( document ).ready(function() {

	// Progressively enhance for browsers with JS enabled
	$('body').removeClass('no-js');


	/* ------------ MOBILE MENU ------------ */

	// Hide menu by default
	$('.header').find('nav').addClass('hide');

	// Mobile menu toggle
	$('button#menu-toggle').click(function() {
		$(this).find('i.ico').toggleClass('ico-menu-open ico-menu-close');
		$('nav').toggleClass('hide');
		$('body').toggleClass('menu-opened');
	});

	// Hide menu when clicked elsewhere on page
	$('#page').click(function() {
		if ( !$('nav').hasClass("hide") ) {
			$('button#menu-toggle').find('i.ico').toggleClass('ico-menu ico-close');
			$('nav').addClass('hide');
		}
	});

	// Toggle-able submenus in header
	$('.menu').find('.category').click(function() {
		$('.menu').find('.category').removeClass('active');
		$(this).toggleClass('active');
	});
	$('#page').click(function() {
		$('.menu').find('.category').removeClass('active');
	});


	/* ------------ DESKTOP STICKY NAV ------------ */
	
	/*
	// "Compress" header when scrolling
	$(function(){
		$(window).scroll(function(){
			if($(document).scrollTop() > 70){
				$('#top').addClass('sticky');
			} else {
				$('#top').removeClass('sticky');
			}
		})
	});
	*/


	/* ------------ HOMEPAGE CAROUSEL ------------ */
	
	// GUI intro teaser
	$('.intro-features').owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		nav: false,
		animateOut: 'fadeOut',
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		lazyLoad: true,
		dotClass: 'owl-dot dot-simple',
	});
	
	// Features
	$('.slider-features').owlCarousel({
		center: true,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		paginationNumbers: true,
		dotsData: true,
		lazyLoad: true,
		autoWidth: true,
		dotClass: 'owl-dot dot-numbered',
	});


	/* ------------ COUNTDOWN ------------ */

	$(function(){
		var countdownTo = moment.tz("2018-05-31 17:00", "Etc/UTC"); // <== UTC time of release

		$('#clock').countdown(countdownTo.toDate())
		.on('update.countdown', function(event) {
			// full format (days hrs:min:sec)
			var full = '<div class="part"><span class="number">%-w</span><span class="desc">weeks</span></div><div class="part"><span class="number">%-d</span><span class="desc">days</span></div><div class="part"><span class="number">%-H</span><span class="desc">hours</span></div><div class="part"><span class="number">%-M</span><span class="desc">minutes</span></div><div class="part"><span class="number">%-S</span><span class="desc">seconds</span></div>';
			// without days (hrs:min:sec)
			var hours = '<div class="part"><span class="number">%-I</span><span class="desc">hours</span></div><div class="part"><span class="number">%-M</span><span class="desc">minutes</span></div><div class="part"><span class="number">%-S</span><span class="desc">seconds</span></div>';

			$(this).html(event.strftime(full)); // <== 'hours' or 'full'
		})
		.on('finish.countdown', function(event) {
			$(this).html('<div class="finished"><strong>Particl Market</strong> (alpha) released! &ndash; <a href="https://particl.news/particl-marketplace-alpha-released-and-available-for-testing-3240739f7509">Read announcement</a> & <a href="https://github.com/particl/particl-desktop/releases">Download now</a></div>')
		});
	});


});