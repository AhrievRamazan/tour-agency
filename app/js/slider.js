$(function () {
  const imageBox = document.querySelectorAll('.slider-box')
  const imageView = document.querySelector('.image-view')
  const galleryButton = document.querySelectorAll('.gallery-btn')




  $('.expert-slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1
  });
  $('.slider-box').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

})