const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
	sidebarToggle();
});

closeBtn.addEventListener("click", function () {
	sidebarToggle();
});

function sidebarToggle() {
	sidebar.classList.toggle("show-sidebar");
}
