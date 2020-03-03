/*
	meme version 2 example
	3.3.2020
*/

// global scope
var catImage;
var pantherImage;

function preload() {
	catImage = loadImage("cat.jpg");
	pantherImage = loadImage("panther.jpg");
}

function setup() {
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 2;
}

function draw() {
	background('gray');

	// draw the image
	if (mouseIsPressed) {
		image(pantherImage, 0, 0, width, height);
	} else {
		image(catImage, 0, 0, width, height);
	}

	textSize(100);
	fill('blue');
	stroke('pink');
	strokeWeight(20);
	textStyle(ITALIC);
	textFont('Trade Winds');
	textAlign(CENTER, CENTER);

	var hello = 'hello world';
	if (mouseIsPressed) {
		hello = 'goodbye';
	}
	text(hello, 250, 250);

	textSize(30);
	strokeWeight(5);
	textStyle(NORMAL);
	textAlign(CENTER, TOP);

	var welcome = 'welcome to my website hello';
	var end = map(frameCount, 0, 200, 0, welcome.length);
	if (mouseIsPressed) {
		welcome = "I'm a panther.";
	} else {
		welcome = "I'm a cat.";
	}
	text(welcome, 250, 350);
}