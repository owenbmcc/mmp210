/*
	meme version 2 example
	3.3.2020
*/

// global scope
var catImage;
var pantherImage;
var dogImage;

var counter = 0;
var instructions = "click here";
var x;
var y;

function preload() {
	catImage = loadImage("cat.jpg");
	pantherImage = loadImage("panther.jpg");
	dogImage = loadImage("dog.jpg");
}

function setup() {
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 2;

	x = width - 150;
	y = height - 100;
}

function mousePressed() {
	counter++;
	if (counter == 3) {
		counter = 0;
	}

	if (mouseX > width/2 && mouseY > height/2) {
		// bottom right
		instructions = 'now click here';
		y = 50;
	} else if (mouseX > width/2 && mouseY < height/2) {
		instructions = 'now im over here';
		x = 50;
	} else if (mouseX < width/2 && mouseY < height/2) {
		instructions = 'now im down here';
		y = height - 100;
	}
}

function draw() {
	background('gray');

	// draw the image
	if (counter == 0) {
		image(catImage, 0, 0, width, height);
	} else if (counter == 1) {
		image(pantherImage, 0, 0, width, height);
	} else {
		image(dogImage, 0, 0, width, height);
	}

	textSize(100);
	fill('blue');
	stroke('pink');
	strokeWeight(20);
	textStyle(ITALIC);
	textFont('Trade Winds');
	textAlign(CENTER, CENTER);
	textSize(30);
	strokeWeight(5);
	textStyle(NORMAL);
	textAlign(CENTER, TOP);

	
	text(instructions, x, y, 150);
}