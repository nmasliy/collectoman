import Swiper, { Autoplay, Pagination, Navigation, Thumbs } from 'swiper';
import { throttle } from '../functions/throttle';

Swiper.use([Autoplay, Pagination, Navigation, Thumbs]);

function initMobileSlider(parent, wrapper, items, breakpoint = 1024,  options, watchResize = false) {
  if (!options) {
    options = {
      spaceBetween: 30,
      slidesPerView: 3,
      autoplay: {
        delay: 3000,
      },
    };
  }

  let swiper = null;

  function init() {
    const $parent = document.querySelector(parent);
    const $wrapper = $parent.querySelector(wrapper);
    const $items = $wrapper.querySelectorAll(items);

    if (
      window.innerWidth <= breakpoint &&
      !$parent.classList.contains('swiper')
    ) {
      $parent.classList.add('swiper');
      $wrapper.classList.add('swiper-wrapper');
      $items.forEach((slide) => slide.classList.add('swiper-slide'));

      swiper = new Swiper(parent, options);
    } else if (
      window.innerWidth > breakpoint &&
      $parent.classList.contains('swiper')
    ) {
      swiper?.destroy();

      $parent.classList.remove('swiper');
      $wrapper.classList.remove('swiper-wrapper');
      $items.forEach((slide) => slide.classList.remove('swiper-slide'));
    }
  }

  init();

  if (watchResize) {
    let throttledInit = throttle(init);

    window.addEventListener('resize', throttledInit);
  }
}

// initMobileSlider('.hero__benefits', '.hero__cards', '.hero__card', 760);

const categoriesSwiper = new Swiper('.categories-slider', {
  spaceBetween: 50,
  navigation: {
    nextEl: '.categories-slider .slider-button-next',
    prevEl: '.categories-slider .slider-button-prev',
  },
  pagination: {
    el: '.categories-slider .slider-pagination',
    clickable: true
  },
})

const productThumbs  = new Swiper('.product__thumbs', {
  spaceBetween: 20,
  slidesPerView: 3
})

const productSwiper = new Swiper('.product__slider', {
  spaceBetween: 50,
  navigation: {
    nextEl: '.product__slider .slider-button-next',
    prevEl: '.product__slider .slider-button-prev',
  },
  pagination: {
    el: '.product__slider .slider-pagination',
    clickable: true
  },
  thumbs:{
    swiper: productThumbs
  }
})

const catalogSwiper = new Swiper('.catalog-slider__swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.catalog-slider .slider-button-next',
    prevEl: '.catalog-slider .slider-button-prev',
  },
  pagination: {
    el: '.catalog-slider .slider-pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
    },
    991: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    }
  }
})

