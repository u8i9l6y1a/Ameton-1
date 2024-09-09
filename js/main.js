const swiper = new Swiper(".swiper", {
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  keyboard: {
    enable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
  },
  slidesPerView: 4,
  slidesPerGroup: 1,
  spaceBetween: 24,
  grabCursor: true,
  pageUpDowb: true,
});
