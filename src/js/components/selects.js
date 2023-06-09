import Choices from "choices.js";

const selectNodes = document.querySelectorAll('.choices-select select');

selectNodes?.forEach(el => {
  const value = el.value || '';

	const choices = new Choices(el, {
		searchEnabled: false,
		itemSelectText: '',
		duplicateItemsAllowed: false,
	});

  const form = el.closest('form');

  const resetBtn = form?.querySelector('button[type="reset"]');

  resetBtn?.addEventListener('click', () => {
    choices.setChoiceByValue(value);
  })

})

