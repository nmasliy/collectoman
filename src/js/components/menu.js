import '../functions/mobile-100vh-fix';
import '../functions/header-height';
import { throttle } from '../functions/throttle';
import Menu from '../functions/Menu';

const menu = new Menu({
  menu: document.querySelector('.burger-menu'),
  burger: document.querySelector('.burger'),
  close: document.querySelector('.menu__close'),
  overlay: document.querySelector('.menu-overlay'),
  navLinks: document.querySelectorAll('.nav li a'),
  burgerCaption: 'Открыть меню',
  burgerActiveCaption: 'Закрыть меню',
  transitionDelay: 400,
  breakpoint: 991,
  onOpen: () => {
    document.querySelector('.header').classList.add('is-active');
  },
  onClose: () => {
    document.querySelector('.header').classList.remove('is-active');
  }
});

if (document.querySelector('.profile-menu')) {
  const isOverlay = window.innerWidth <= 768;

  const profileMenu = new Menu({
    overlay: isOverlay ? document.querySelector('.profile-overlay') : null,
    menu: document.querySelector('.profile-menu'),
    burger: document.querySelector('.profile-menu__burger'),
    navLinks: document.querySelectorAll('.profile-menu li a'),
    burgerCaption: 'Открыть меню',
    burgerActiveCaption: 'Закрыть меню',
    transitionDelay: 460,
    breakpoint: 99999,
    disableScroll: false
  });

  function changeMenuOptions() {
    if (window.innerWidth <= 768) {
      if (profileMenu.options.overlay) return;

      profileMenu.options.overlay = document.querySelector('.profile-overlay');
      profileMenu._removeListeners();
      profileMenu._addListeners();
    } else {
      if (!profileMenu.options.overlay) return;

      profileMenu.options.overlay = null;
    }
  }

  window.addEventListener('resize', throttle(changeMenuOptions));

}
