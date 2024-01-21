const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	});
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e1) => observer.observe(e1));

const x_btn = document.getElementById("popup-toggle-id");

function x_out(event) {
	const popup = document.querySelector('.popup');
	popup.classList.add('x-pop-up');
}

x_btn.onclick = x_out;
/* x_btn.target.classList.add('.x-pop-up');*/