document.addEventListener('DOMContentLoaded', function () {
	const projectFigures = document.querySelectorAll('.main__projects--figure');

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
				} else {
					entry.target.classList.remove('visible');
				}
			});
		},
		{ threshold: 0.1 }
	);

	projectFigures.forEach((figure) => {
		observer.observe(figure);
	});
});
