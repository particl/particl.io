/*! particl.io v1.0 | Author: Martin Allien <martin@particl.io> */

$( document ).ready(function() {

	// Progressively enhance for browsers with JS enabled
	$('body').removeClass('no-js');


	/* ------------ MOBILE MENU ------------ */

	// Hide menu by default
	$('nav').addClass('hide');

	// Mobile menu toggle
	$('button#menu-toggle').click(function() {
		$(this).find('i.ico').toggleClass('ico-menu ico-close');
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
	$('.owl-carousel').owlCarousel({
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
	});


	/* ------------ COUNTDOWN ------------ */

	$(function(){
		var countdownTo = moment.tz("2018-05-31 17:00", "Etc/UTC"); // <== UTC time of release

		$('#clock').countdown(countdownTo.toDate())
		.on('update.countdown', function(event) {
			// full format (days hrs:min:sec)
			var full = '<div class="part"><span class="number">%-d</span><span class="desc">days</span></div> <div class="part"><span class="number">%-H</span><span class="desc">hours</span></div><div class="part"><span class="number">%-M</span><span class="desc">minutes</span></div><div class="part"><span class="number">%-S</span><span class="desc">seconds</span></div>';
			// without days (hrs:min:sec)
			var hours = '<div class="part"><span class="number">%-I</span><span class="desc">hours</span></div><div class="part"><span class="number">%-M</span><span class="desc">minutes</span></div><div class="part"><span class="number">%-S</span><span class="desc">seconds</span></div>';

			$(this).html(event.strftime(hours)); // <== 'hours' or 'full'
		})
		.on('finish.countdown', function(event) {
			$(this).html('<div class="finished"><strong>Particl Market</strong> (alpha) released! &ndash; <a href="https://particl.news/particl-marketplace-alpha-released-and-available-for-testing-3240739f7509">Read announcement</a> & <a href="https://github.com/particl/particl-desktop/releases">Download now</a></div>')
		});
	});

});