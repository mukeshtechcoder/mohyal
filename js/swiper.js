let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 1 }, // Mobile
    480: { slidesPerView: 2 }, // Small Screens
    768: { slidesPerView: 3 }, // Tablets
    1024: { slidesPerView: 4 }, // Laptops
    1280: { slidesPerView: 5 }, // Large Screens
  },
});
