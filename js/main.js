$('.advantages-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            prevArrow: '<img class="slick-arrow slick-arrow__left" src="img/left-chevron.svg" alt="">',
            nextArrow: '<img class="slick-arrow slick-arrow__right" src="img/right-chevron.svg" alt="">',
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            prevArrow: '<img class="slick-arrow slick-arrow__left" src="img/left-chevron.svg" alt="">',
            nextArrow: '<img class="slick-arrow slick-arrow__right" src="img/right-chevron.svg" alt="">',
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<img class="slick-arrow slick-arrow__left" src="img/left-chevron.svg" alt="">',
            nextArrow: '<img class="slick-arrow slick-arrow__right" src="img/right-chevron.svg" alt="">',
          }
        }
    ]
});