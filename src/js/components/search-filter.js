import AnimateElement from '../functions/AnimateElement';

const filterBody = document.querySelector('.search-filter__body');
const filterBtn = document.querySelector('.search-filter__el');

filterBtn?.addEventListener('click', () => {
  filterBtn.classList.toggle('is-active');
  filterBody.classList.toggle('is-active');
  // AnimateElement.toggle(
  //   filterBody,
  //   { opacity: 0, height: 0 },
  //   { opacity: 1, height: 'auto' },
  //   0.5
  // );
});
