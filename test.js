$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-nav',
    arrows: false,
    fade: false,
    useTransform: true,
    speed: 400,
    dots:true,
    autoplay:true,
   
  });
  $('.slider-nav')
  .on('init', function(event, slick) {
    $('.slider-nav .slick-slide.slick-current').addClass('is-active');
})
  .slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots:false,
    infnite:true,
    prevArrow:".arrow_prev",
    nextArrow:".arrow_next",
    centerMode:true,
    focusOnSelect:true,
    autoplay:true,
    variableWidth:true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode:true,
        }
    }, {
        breakpoint: 640,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:true,
       }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:true,
          
   }
    }]
  });
  


$('.slider-for').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});