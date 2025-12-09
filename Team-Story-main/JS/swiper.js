var swiperMain = new Swiper(".slide-swp", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  loop: true
});

var swiperProducts = new Swiper(".slide_product", {
  slidesPerView: 5,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  loop: true,
  breakpoints: {
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    900: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
    1400: { slidesPerView: 5 }
  }
});