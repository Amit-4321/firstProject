$(document).ready(function(){
//     $('.food-slider').slick({
//         autoplay:true,
// slidesToshow:3,
// slidesToscroll:1,
// prevArrow:".prev-btn",
// nextArrow:".next-btn",
//     });


    // $('.food-slider').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //   });

      // Binding of init has to be before intialization!
$('.food-slider').on('init', (event, slick, currentSlide) => {
    let slideIndex = slick.currentSlide;
    let slidesLength = slick.slideCount;
  })
  
  // Initialise.
  $('.food-slider').slick({
    slidesToShow: 3,
    dots: true,
    //centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })
  
  let slideIndex = $('.slick-slide:not(.slick-cloned)').length
    $('.add-slide').on('click', () => {
      slideIndex++
      $('.food-slider').slick('slickAdd','<li><h3>' + slideIndex + '</h3></li>')
      $('.food-slider').slick('slickGoTo', 'slickCurrentSlide' + 1)
    })
  
    $('.remove-slide').on('click', () => {
      $('.food-slider').slick('slickRemove', slideIndex - 1)
        if (slideIndex !== 0) {
          slideIndex--
        }
    })

});