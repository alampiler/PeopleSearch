$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 6,
    dots: false,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
      responsive: [
          {
              breakpoint: 1028,
              settings: {
                  centerPadding: '20px',
                  slidesToShow: 6,
                  slidesToScroll: 6
              }
          },

          {
              breakpoint: 830,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  centerPadding: '10px'
              }
          },

          {
              breakpoint: 670,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  centerPadding: '1px'
              }
          },

          {
              breakpoint: 520,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  centerPadding: '2px'
              }
          }


      ]
  });
});


