$(function () {
  const imageBox = document.querySelectorAll('.slider-box')
  const imageView = document.querySelector('.image-view')
  const galleryButton = document.querySelectorAll('.gallery-btn')


  $('.profile-slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    touchThreshold: 15,
    speed: 500,
    easing: 'easy',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    
    ]
  })

  $('.slider-box'), $('.expert-slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    touchThreshold: 15,
    speed: 500,
    easing: 'easy',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:1,
        }
      }
    ]
  });

})