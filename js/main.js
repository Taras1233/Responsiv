const initNavigation = () => {
	const opener = document.querySelector(".nav-opener");
	const holder = document.querySelector(".navlist");
	opener.addEventListener('click', (e) => {
		e.preventDefault();
		holder.classList.toggle('menu-open');
	});
};


document.addEventListener("DOMContentLoaded", () => {
	initNavigation();
});
