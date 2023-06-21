const profileMore = document.querySelector('.profile-header__more');

if (profileMore) {
  const btn = profileMore.querySelector('.profile-header__more-btn');

  document.body.addEventListener('click', e => {
    if (e.target.closest('.profile-header__more-btn')) {
      profileMore.classList.toggle('is-active');
    } else {
      profileMore.classList.remove('is-active');
    }
  })
}