(function ($) {

    "use strict";

    //Navigation Section
    $('.navbar-collapse a').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

    new WOW().init();

    // jQuery to collapse the navbar on scroll //
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    console.log('before NIVO');

      // NIVO LIGHTBOX
      $('.iso-box-section a').nivoLightbox({
        effect: 'fadeScale',
      });

      console.log('after NIVO');

    // Owl Carousel
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        animateOut: 'fadeOut',
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        nav:true,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });

    owl.on('changed.owl.carousel', function(event) {
      var item = event.item.index - 2;     // Position of the current item
      $('.slider-caption').removeClass('wow fadeInDown animated');
      $('.slider-caption').removeAttr( "style" );

      $('.slider-btn').removeClass('wow fadeInUp animated');
      $('.slider-btn').removeAttr( "style" );

      $('.owl-item').not('.cloned').eq(item).find('.slider-caption').addClass('wow fadeInDown animated');
      $('.owl-item').not('.cloned').eq(item).find('.slider-caption').attr("style","visibility: visible; animation-name: fadeInDown;");
      
      $('.owl-item').not('.cloned').eq(item).find('.slider-btn').addClass('wow fadeInUp animated');
      $('.owl-item').not('.cloned').eq(item).find('.slider-btn').attr("style","visibility: visible; animation-name: fadeInUp;");
    });


    // Swiper
    var swiper = new Swiper( '.swiper-container', {
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 1,
      loop: true,
      speed: 600,
      autoplay: true,
      smartSpeed: 3000,
      fluidSpeed: false,
      dragEndSpeed: false,
      centeredSlides: true,
      slidesPerView: 'auto',
          
      coverflowEffect: {
      rotate: 0,
      stretch: 95,
      depth: 150,
      modifier: 1,
      slideShadows : true,
      }
      });

})(jQuery);



/*------------------------------*/
/*	 Parallax
/*------------------------------*/


    $(window).bind('load', function() {
        if(!onMobile)
        parallaxInit();
    });

    function parallaxInit() {
       /* $('#history').parallax("50%", 0.2);
        $('#facts').parallax("50%", 0.2);
        $('#cta').parallax("50%", 0.2);
        $('#skills').parallax("50%", 0.2);
        $('#video').parallax("50%", 0.2);
        $('#page-header').parallax("50%", 0.2);
        $('#home').parallax("50%", 0.2);*/
        $('#clients').parallax("100%", 0.2);
        $('#contact').parallax("100%", 0.2);
    }
    var onMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        onMobile = true;
    }



/*------------------------------*/
/*	 Isotype Filter
/*------------------------------*/

jQuery(document).ready(function($){

    if ( $('.iso-box-wrapper').length > 0 ) { 
  
        var $container  = $('.iso-box-wrapper'), 
          $imgs     = $('.iso-box img');
  
        $container.imagesLoaded(function () {
  
          $container.isotope({
          layoutMode: 'fitRows',
          itemSelector: '.iso-box'
          });
  
          $imgs.load(function(){
            $container.isotope('reLayout');
          })
  
        });
  
        //filter items on button click
  
        $('.filter-wrapper li a').click(function(){
  
            var $this = $(this), filterValue = $this.attr('data-filter');
  
        $container.isotope({ 
          filter: filterValue,
          animationOptions: { 
              duration: 750, 
              easing: 'linear', 
              queue: false, 
          }                
        });             
  
        // don't proceed if already selected 
  
        if ( $this.hasClass('selected') ) { 
          return false; 
        }
  
        var filter_wrapper = $this.closest('.filter-wrapper');
        filter_wrapper.find('.selected').removeClass('selected');
        $this.addClass('selected');
  
          return false;
        }); 
  
    }
  
  });


/*------------------------------*/
/*  Scroll to top
/*------------------------------*/
	 
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
  } else {
      $('.scrollup').fadeOut();
  }
}); 

$('.scrollup').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 2000);
  return false;
});
