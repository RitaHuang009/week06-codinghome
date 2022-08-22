"use strict";

$(function () {
  $('.js-burger').on('click', function (e) {
    console.log("yes");
    e.preventDefault();
    $('.js-menu-mobile').toggleClass('hidden');
  });
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000
    }
  });
  var swiper = new Swiper(".shareSwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".share.swiper-pagination"
    },
    navigation: {
      nextEl: ".share.swiper-button-next",
      prevEl: ".share.swiper-button-prev"
    },
    loop: true,
    autoplay: {
      delay: 3000
    }
  });
});
//# sourceMappingURL=all.js.map
