var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    nextEl: "#next-arrow",
    prevEl: "#prev-arrow",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
  loop: true, // Включите, если хотите зациклить слайды
});
