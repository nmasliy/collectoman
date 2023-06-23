import { throttle } from './throttle';

class Menu {
  constructor(options) {
    this.root = document.querySelector(':root');
    this.html = document.querySelector('html');
    this.isInit = false;

    const defaultOptions = {
      menu: document.querySelector('[data-menu]'),
      burger: document.querySelector('[data-burger]'),
      close: document.querySelector('[data-menu-close]'),
      overlay: document.querySelector('[data-menu-overlay]'),
      navLinks: document.querySelectorAll('[data-menu-item]'),
      burgerCaption: 'Открыть меню',
      burgerActiveCaption: 'Закрыть меню',
      transitionDelay: 400,
      breakpoint: 1024,
      display: 'block',
      disableScroll: true,
      onOpen: () => {},
      onClose: () => {},
    };
    this.options = { ...defaultOptions, ...options };

    this.closeHandler = this.close.bind(this, options);
    this.toggleHandler = this.toggle.bind(this, options);

    this._init();
  }

  async open() {
    this.options.onOpen();

    if (this.options.overlay) {
      this.options.overlay.style.display = 'block';
    }

    this.options.menu.style.display = this.options.display;
    this.options.burger.setAttribute('aria-expanded', 'true');
    this.options.burger.setAttribute('aria-label', this.options.burgerActiveCaption);

    if (this.options.disableScroll) {
      this.html.classList.add('disable-scroll');
    }

    await waitFor(1);

    if (this.options.overlay) {
      this.options.overlay.classList.add('is-active');
    }

    this.options.menu.classList.add('is-active');
    this.options.burger.classList.add('is-active');
  }

  async close() {
    this.options.onClose();

    if (this.options.overlay) {
      this.options.overlay.classList.remove('is-active');
    }

    this.options.menu.classList.remove('is-active');
    this.options.burger.classList.remove('is-active');
    this.options.burger.setAttribute('aria-expanded', 'false');
    this.options.burger.setAttribute('aria-label', this.options.burgerCaption);

    if (this.options.disableScroll) {
      this.html.classList.remove('disable-scroll');
    }

    await waitFor(this.options.transitionDelay);

    if (this.options.overlay) {
      this.options.overlay.style.display = '';
    }

    this.options.menu.style.display = '';
  }

  toggle() {
    this.options.menu.classList.contains('is-active') ? this.close() : this.open();
  }

  _init() {
    if (!this.options.menu) return;
    this.options.burger.setAttribute('aria-label', this.options.burgerCaption);
    this._events();
  }

  _addListeners() {
    this.options.burger?.addEventListener('click', this.toggleHandler);
    this.options.close?.addEventListener('click', this.closeHandler);
    this.options.overlay?.addEventListener('click', this.closeHandler);
    this.options.navLinks?.forEach((el) => el.addEventListener('click', this.closeHandler));
  }

  _removeListeners() {
    this.options.burger?.removeEventListener('click', this.toggleHandler);
    this.options.close?.removeEventListener('click', this.closeHandler);
    this.options.overlay?.removeEventListener('click', this.closeHandler);
    this.options.navLinks?.forEach((el) => el.removeEventListener('click', this.closeHandler));
  }

  _events() {
    const initEvents = () => {
      // Enable menu on screens <= breakpoint, otherwise disable it
      if (window.innerWidth <= this.options.breakpoint) {
        if (this.isInit) return;
        this._addListeners();
        this.isInit = true;
      } else {
        if (!this.isInit) return;
        this.close();
        this._removeListeners();
        this.isInit = false;
      }
    }

    initEvents();

    window.addEventListener('resize', throttle(initEvents));
  }
}

const waitFor = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export default Menu;
