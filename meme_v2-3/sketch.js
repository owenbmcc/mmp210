/*
	meme v2-3
	conditional logic
*/

var lizardImage, catImage;

function preload() {
	lizardImage = loadImage("lizard.jpg");
	catImage = loadImage("cat.jpg");
}

function setup() {
	createCanvas(800, 600);
	textAlign(CENTER, CENTER);
	textFont('Roboto Mono');
	textSize(75);
}

function draw() {
	background(0);

	var w = width / 2; // half the width
	var h = height / 2; // half the height

	// image in each quadrant
	image(lizardImage, 0, 0, w, h);
	image(lizardImage, w, 0, w, h);
	image(lizardImage, 0, h, w, h);
	image(catImage, w, h, w, h);

	fill(255, 255, 0); // yellow

	if (mouseIsPressed) {
		// top - left quadrant
		if (mouseX < w && mouseY < h) {
			text("lizard", w / 2, h / 2);
		} 
		// top - right quadrant
		else if (mouseX > w && mouseY < h) {
			text("lizard", w / 2 + w, h / 2);
		}
		// bottom - left quadrant
		else if (mouseX < w && mouseY > h) {
			text("lizard", w / 2, h / 2 + h);
		}
		// bottom - right quadrant
		else if (mouseX > w && mouseY > h) {
			text("cat", w / 2 + w, h / 2 + h);
		}
	}
}