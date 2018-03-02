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
	});

	// Hide menu when clicked elsewhere on page
	$('#page').click(function() {
		if ( !$('nav').hasClass("hide") ) {
			$('button#menu-toggle').find('i.ico').toggleClass('ico-menu ico-close');
			$('nav').addClass('hide');
		}
	});


	/* ------------ DESKTOP STICKY NAV ------------ */

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

	// Smooth scrolling to sections
	$('.scroll').click(function(event){
		event.preventDefault();
		var dest = 0;
		if ( $(this.hash).offset().top > $(document).height() - $(window).height() ){
			dest = $(document).height() - $(window).height();
		} else {
			dest = $(this.hash).offset().top;
		}
		$('html, body').animate({scrollTop:dest}, 1000, 'swing');
   });



});