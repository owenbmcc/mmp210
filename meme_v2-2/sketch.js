/*
	meme v2-2
	conditional logic
*/

var lizardImage, catImage;

function preload() {
	lizardImage = loadImage("lizard.jpg");
	catImage = loadImage("cat.jpg");
}

function setup() {
	createCanvas(900, 300);
	textAlign(CENTER, CENTER);
	textFont('Roboto Mono');
}

function draw() {
	background(0);

	var w = width / 3;

	image(catImage, 0, 0);
	image(catImage, w, 0);
	image(catImage, w*2, 0);

	fill(255, 255, 0); // yellow for text

	if (mouseIsPressed) {
		if (mouseX < w) {
			textSize(75);
			text("Hello!", w / 2, height / 2);
		} else if (mouseX < w * 2) {
			textSize(50);
			text("I'm a ...", w + w / 2, height / 2);
		} else {
			textSize(75);
			text("Cat!", w * 2 + w / 2, height / 2);
		}
	}
}