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


	/* ------------ HOMEPAGE CAROUSEL ------------ */
        $('.owl-carousel').owlCarousel({
                center:true,
                items:2,
                loop:true,
                margin:10,
                autoplay:true,
                autoplayTimeout:5000,
                autoplayHoverPause:true,
                paginationNumbers:true,
                dotsData:true,
                lazyLoad:true,
                responsive:{
                        0:{
                                items:1
                        },
                        900:{
                                items:2
                        },
                        1024:{
                                items:3
                        },
                        1200:{
                                items:4
                        }
                },
                onDrag: dragg_event,
                onDragged: dragged_event,
                onChange: change_event,
                onChanged: changed_event
        });
        
        $('.owl-carousel .owl-item').click(function() {
          var selected_pos = $(this).find('> .item').attr('data-dot');

          $('.owl-carousel').trigger('to.owl.carousel', selected_pos - 1);
        });

        function dragg_event(event) {
          $('.owl-carousel .owl-item').addClass('no-opacity');
        }

        function dragged_event(event) {
          $('.owl-carousel .owl-item').removeClass('no-opacity');
        }

        function change_event(event) {
          $('.owl-carousel.owl-drag .owl-item.active').removeClass('has-opacity');
        }

        function changed_event(event) {
          $('.owl-carousel.owl-drag .owl-item.active').removeClass('has-opacity');

          setTimeout(function() {
            $('.owl-carousel.owl-drag .owl-item.active:last').addClass('has-opacity');
          }, 150);
        }
});