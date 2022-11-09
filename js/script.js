
(function ($) {
  'use strict';



  //Hero Slider
  $('.hero-slider').slick({
    autoplay: true,
    infinite: true,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'></button>',
    dots: false,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false
  });
  $('.hero-slider').slickAnimation();


  // testimonial slider
  $('.testimonial-slider').slick({
    arrows: false,
    dots: false
  });


  $('.blog-slider').slick({
    arrows: false,
    dots: true,
    autoplay: true
  });



  /*
   *----------------------------------
   * Document Ready
   *----------------------------------
   */
  $(document).ready(function () {

    // filter
    $(document).ready(function () {
      var containerEl = document.querySelector('.filtr-container');
      var filterizd;
      if (containerEl) {
        filterizd = $('.filtr-container').filterizr({});
      }
      //Active changer
      $('.filter').on('click', function () {
        $('.filter').removeClass('active');
        $(this).addClass('active');
      });
    });


    $(window).load(function () {
      $('div.loading').remove();
      $('body').removeClass('loading');
    });

  }); 

}(jQuery)); 