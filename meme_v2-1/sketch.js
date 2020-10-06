/*
	meme v2-1
	conditional logic
*/

var lizardImage, catImage;

function preload() {
	lizardImage = loadImage("lizard.jpg");
	catImage = loadImage("cat.jpg");
}

function setup() {
	createCanvas(600, 600);
	textAlign(CENTER, CENTER);
	textFont('Roboto Mono');
	textSize(75);
}

function draw() {
	background(0);

	if (mouseIsPressed) {
		image(lizardImage, -400, 0);
		fill(100, 100, 220);
		text("I'm a lizard!", width / 2, height / 2);
	} else {
		image(catImage, -180, -100);
		fill(255, 255, 0);
		text("I'm a cat!", width / 2, height / 2);
	}
}