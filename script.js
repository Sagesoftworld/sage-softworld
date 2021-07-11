// Navigation toggle

let toggler = document.querySelector(".toggler");
let nav = document.querySelector(".navigation");
	toggler.addEventListener("click", () => {
		nav.classList.toggle("active");
		toggler.classList.toggle("active");
});