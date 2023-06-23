const filterBody = document.querySelector('.search-filter__body');
const filterBtn = document.querySelector('.search-filter__el');

filterBtn?.addEventListener('click', () => {
  filterBtn.classList.toggle('is-active');
  filterBody.classList.toggle('is-active');
});
