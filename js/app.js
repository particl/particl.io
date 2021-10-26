"use strict";

// check if touch device
function isTouchDevice() {
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

  var mq = function mq(query) {
    return window.matchMedia(query).matches;
  };

  if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
    return true;
  }

  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
}

if (isTouchDevice()) {
  $('body').addClass('touch-device');
} // header


(function () {
  var header = $('.js-header'),
      dropdowns = header.find('.js-header-dropdown'),
      burger = header.find('.js-header-burger'),
      wrap = header.find('.js-header-wrap');
  dropdowns.each(function () {
    var dropdown = $(this),
        head = dropdown.find('.js-header-head'),
        body = dropdown.find('.js-header-body');
    head.on('click', function (e) {
      e.stopPropagation();

      if (!dropdown.hasClass('open')) {
        dropdowns.removeClass('open');
        dropdown.addClass('open');
      } else {
        dropdowns.removeClass('open');
      }
    });
    body.on('click', function (e) {
      e.stopPropagation();
    });
    $('html, body').on('click', function () {
      dropdowns.removeClass('open');
    });
  });
  burger.on('click', function (e) {
    e.stopPropagation();
    burger.toggleClass('active');
    wrap.toggleClass('visible');
    $('html, body').toggleClass('no-scroll');
  });
})(); // scroll to section


(function () {
  var scroll = $('.js-scroll');
  scroll.click(function () {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000
    });
    return false;
  });
})(); // nice select


$(document).ready(function () {
  $('.select').niceSelect();
}); // tabs

(function () {
  var tabs = $('.js-tabs');
  tabs.each(function () {
    var thisTabs = $(this),
        nav = thisTabs.find('.js-tabs-link'),
        option = thisTabs.find('.option'),
        item = thisTabs.find('.js-tabs-item');
    nav.on('click', function () {
      var thisNav = $(this),
          indexNav = thisNav.index();
      nav.removeClass('active');
      thisNav.addClass('active');
      item.hide();
      item.eq(indexNav).fadeIn();
      initSlider(item.eq(indexNav));
      return false;
    }).first().trigger('click');
  });
  $(document).ready(function () {
    var option = $('.js-tabs-select .option');
    option.on('click', function () {
      var thisOption = $(this),
          indexOption = thisOption.index();
      $('.js-tabs-item').hide();
      $('.js-tabs-item').eq(indexOption).fadeIn();
      initSlider($('.js-tabs-item').eq(indexOption));
    });
  });

  function initSlider(el) {
    var sl = el.find('.js-tabs-slider');

    if (!sl.hasClass('init')) {
      sl.addClass('init');
      sl.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        dots: false,
        speed: 600,
        responsive: [{
          breakpoint: 9999,
          settings: "unslick"
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        }]
      });
    }
  }
})(); // global variables


var prevArrow = '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" fill="none" viewBox="0 0 14 9"><path fill-rule="evenodd" d="M4.909.265a1 1 0 0 0-1.413.057l-3.231 3.5a1 1 0 0 0 0 1.357l3.231 3.5a1 1 0 0 0 1.47-1.357L3.284 5.5H13a1 1 0 1 0 0-2H3.284l1.682-1.822A1 1 0 0 0 4.909.265z" fill="#777e91"/></svg></button>',
    nextArrow = '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" fill="none" viewBox="0 0 14 9"><path fill-rule="evenodd" d="M9.091.265a1 1 0 0 1 1.413.057l3.231 3.5a1 1 0 0 1 0 1.357l-3.231 3.5a1 1 0 0 1-1.47-1.357L10.716 5.5H1a1 1 0 1 1 0-2h9.716L9.034 1.678A1 1 0 0 1 9.091.265z" fill="#23262f"/></svg></button>';
$(document).ready(function () {
  // slider review
  $('.js-slider-review').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    dots: false,
    adaptiveHeight: true,
    speed: 700
  }); // slider comment

  $('.js-slider-comment').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    dots: false,
    speed: 700,
    responsive: [{
      breakpoint: 1280,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }]
  }); // slider history

  $('.js-slider-history').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    speed: 700
  }); // slider description

  $('.js-slider-description').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    speed: 700
  }); // slider interesting

  $('.js-slider-interesting').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    dots: false,
    speed: 700,
    responsive: [{
      breakpoint: 1180,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }]
  }); // slider programs

  $('.js-slider-programs').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    dots: false,
    speed: 700,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }]
  }); // slider for mobile 1 slide

  $('.js-slider-mobile-one').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    dots: false,
    speed: 600,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 9999,
      settings: "unslick"
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $(window).on('resize orientationchange', function () {
    $('.js-slider-resize').slick('resize');
  });
}); // height windows for ios

var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // toggle body theme

(function () {
  var switchTheme = $('.js-theme'),
      body = $('body');
  switchTheme.on('change', function () {
    if (!body.hasClass('dark')) {
      body.addClass('dark');
      localStorage.setItem('darkMode', "on");
    } else {
      body.removeClass('dark');
      localStorage.setItem('darkMode', "off");
    }
  });
})(); // footer menu


(function () {
  var category = $('.footer__category'),
      menu = $('.footer__menu');
  category.on('click', function () {
    category.toggleClass('active');
    menu.slideToggle();
  });
})(); // faq


(function () {
  var item = $('.faq__item'),
      head = item.find('.faq__head'),
      body = item.find('.faq__body');
  head.on('click', function () {
    var thisHead = $(this);
    thisHead.parents('.faq__item').toggleClass('active');
    thisHead.parents('.faq__item').find('.faq__body').slideToggle();
  });
})(); // pricing paramters


(function () {
  var more = $('.pricing__more'),
      list = $('.pricing__list');
  more.on('click', function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
})(); // magnificPopup


(function () {
  var link = $('.js-popup-open');
  link.magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    removalDelay: 200,
    callbacks: {
      beforeOpen: function beforeOpen() {
        this.st.mainClass = this.st.el.attr('data-effect');
        var sl = $('.js-slider-trainer');

        if (!sl.hasClass('init')) {
          sl.addClass('init');
          sl.slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: prevArrow,
            nextArrow: nextArrow,
            speed: 700
          });
        }
      }
    }
  });
})(); // aos animation duration: 1000, offset: 50,
// aos animation


AOS.init({
  duration: 1000,
  offset: 50
}); // parallax effect

(function () {
  var parallax = $('.js-parallax');

  if (parallax.length) {
    parallax.each(function () {
      var _this = $(this),
          scale = _this.data('scale'),
          orientation = _this.data('orientation');

      new simpleParallax(_this[0], {
        scale: scale,
        orientation: orientation,
        overflow: true,
        transition: 'cubic-bezier(0,0,0,1)'
      });
    });
  }
})();