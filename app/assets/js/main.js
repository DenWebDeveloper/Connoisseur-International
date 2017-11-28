var swiper = new Swiper("#services .swiper-container", {
  effect: "coverflow",
  parallax: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: ".swiper-pagination"
  }
});

var swiper = new Swiper("#about .swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar"
  },
  grabCursor: true,
  slideToClickedSlide: true,
  autoplay: {
    delay: 6000
  }
});
