var swiper = new Swiper(".slide-container", {
  slidesPerView: 'auto',
  spaceBetween: 20,
  sliderPerGroup: 4,
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  centerSlide: "true",
  fade: "true",
  // grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    740: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1327: {
      slidesPerView: 3,
    },
    1690: {
      slidesPerView: 4,
    }
  },
  loop: true,
});
