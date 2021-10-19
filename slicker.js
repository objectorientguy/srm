
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-nav',
    arrows: false,
    fade: false,
    useTransform: true,
    speed: 400,
  });
  $('.slider-nav')
  .on('init', function(event, slick) {
    $('.slider-nav .slick-slide.slick-current').addClass('is-active');
})
  .slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.slider-for',
    dots:false,
    prevArrow:".arrow_prev",
    nextArrow:".arrow_next",
    centerMode:false,
    focusOnSelect:true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 640,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
       }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          
   }
    }]
  });
  


$('.slider-for').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('mouseover', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-for').slick('slickGoTo', goToSingleSlide);
});