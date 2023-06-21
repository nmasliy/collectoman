import '../functions/mobile-100vh-fix';
import '../functions/header-height';
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
});

if (document.querySelector('.profile-menu')) {
  const profileMenu = new Menu({
    menu: document.querySelector('.profile-menu'),
    burger: document.querySelector('.profile-menu__burger'),
    navLinks: document.querySelectorAll('.profile-menu li a'),
    burgerCaption: 'Открыть меню',
    burgerActiveCaption: 'Закрыть меню',
    transitionDelay: 460,
    breakpoint: 99999,
    disableScroll: false
  });
}
