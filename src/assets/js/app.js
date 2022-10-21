'use strict';

//= components/smooth-scroll-plugin.js
//= components/swiper-bundle.js
//= components/aos.js

document.addEventListener('DOMContentLoaded', () => {
    //= components/form.js
    //= components/smooth-scroll.js
    //= components/select.js
    //= components/sphere.js
    //= components/works.js
    //= components/cursor.js
    //= components/faq.js
    //= components/modal.js
    //= components/burger.js
});

const swiper = new Swiper('.reviews-slider', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1'
    },
    autoHeight: true,
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 38,

    breakpoints: {
        1000: {
            slidesPerView: 2
        }
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    }
});

const swiper2 = new Swiper('.works-slider', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2'
    },
    autoHeight: true,
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 40,

    breakpoints: {
        600: {
            slidesPerView: 2
        }
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    }
});

function isTouchDevice() {
    try {
        document.createEvent('TouchEvent');
        document.querySelector('#cursor').style.display = 'none';
        document.querySelector('#aura').style.display = 'none';
        return true;
    } catch (e) {
        return false;
    }
}
isTouchDevice();

const scene = document.querySelector('.scene1');
const parallaxInstance = new Parallax(scene);

const scene2 = document.querySelector('.scene2');
const parallaxInstance2 = new Parallax(scene2);

const scene3 = document.querySelector('.scene3');
const parallaxInstance3 = new Parallax(scene3);

const scene4 = document.querySelector('.scene4');
const parallaxInstance4 = new Parallax(scene4);