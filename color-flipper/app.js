let colors = ["red", "green", "blue"];

let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", function () {
	let randomNumber = getRandomNumber();
	color.textContent = colors[randomNumber];
	document.body.style.backgroundColor = colors[randomNumber];
});

function getRandomNumber() {
	return Math.floor(Math.random() * colors.length);
}
