let btns = document.querySelectorAll(".btn");
let value = document.querySelector("#value");

let count = 0;

btns.forEach(function (btn) {
	btn.addEventListener("click", function () {
		if (this.classList.contains("increase")) {
			count++;
		} else if (this.classList.contains("decrease")) {
			count--;
		} else {
			count = 0;
		}

		if (count > 0) {
			value.style.color = "green";
		} else if (count < 0) {
			value.style.color = "red";
		} else {
			value.style.color = "#222";
		}
		console.log(count);
		value.textContent = count;
	});
});
