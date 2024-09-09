document.addEventListener('DOMContentLoaded', () => {
	const elements = document.querySelectorAll('.slide-in');

	elements.forEach((el, index) => {
		setTimeout(() => {
			el.classList.add('slide-in-visible');
		}, index * 200);
	});
});
