const worksButton = document.querySelector(".works-button");
const heroBackground = document.querySelector(".hero-background");
var bghue = 252;

function randomNumber(up) {
	return Math.round(Math.random() * up)
}

function changeColor() {
    bghue = randomNumber(360);
    heroBackground.style.backgroundColor = 'hsla('+bghue+', 52%, 51%, 1)';
    console.log(bghue);
}