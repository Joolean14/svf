var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    mousewheel:true
});