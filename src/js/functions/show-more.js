export function initShowMore(triggerSelector, parentSelector) {
  const triggerNodes = document.querySelectorAll(triggerSelector);

  if (!triggerNodes.length > 0) return;

  triggerNodes.forEach((el) => {
    el.addEventListener('click', function (e) {
			e.preventDefault();
			
      const parentNode = el.closest(parentSelector);

      parentNode.classList.add('is-expanded');
    });
  });
}
