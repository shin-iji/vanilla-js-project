const toggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

toggleBtn.addEventListener("click", function () {
	toggleBtn.classList.toggle("nav-toggle-activated");
	links.classList.toggle("show-links");
});
