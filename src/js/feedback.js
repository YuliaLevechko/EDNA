// import Swiper from 'swiper';

const swiper = new Swiper('.feedback-swiper-container', {
    pagination: {
        el: '.feedback-swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicByllets: true,
    },
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    slideToClickedSlide: true,
});