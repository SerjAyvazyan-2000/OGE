


let reviewsSwiper = new Swiper(".reviews-swiper", {
    spaceBetween: 24,
    slidesPerView: 3,

    loop: true,
    autoplay: {
        delay: 1200,
        disableOnInteraction: false,
    },
    speed: 2000,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    breakpoints: {
        320: {slidesPerView: 1,},
        490: {slidesPerView: 1,spaceBetween: 0},
        620: {slidesPerView: 1.5,},
        810: {slidesPerView: 2},
        992: {slidesPerView: 2},
        1096: {slidesPerView: 2.5},
        1232: {slidesPerView: 3},
        1920: {slidesPerView: 3},
    },

});
