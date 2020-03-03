/*
	meme version 1 example
	2.25.2020
*/

// global scope
var catImage;

function preload() {
	catImage = loadImage("cat.jpg");
}

function setup() {
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 2;
}

function draw() {
	background('gray');

	// draw the image
	tint(255, 255, 255);
	image(catImage, 0, 0, width/2, height);

	tint(255, 0, 100);
	image(catImage, width/2, 0, width/2, height);

	var imageColor = get(mouseX, mouseY);
	fill(imageColor);
	noStroke();
	rect(mouseX, mouseY, 50, 50);


	textSize(100);
	fill('blue');
	stroke('pink');
	strokeWeight(20);
	textStyle(ITALIC);
	textFont('Trade Winds');
	textAlign(LEFT, CENTER);

	var hello = 'hello world';
	var n = map(frameCount, 0, 400, 0, hello.length);
	text(hello.charAt(n), 0, 250);

	textSize(30);
	strokeWeight(5);
	textStyle(NORMAL);
	textAlign(CENTER, TOP);

	var welcome = 'welcome to my website hello';
	var end = map(frameCount, 0, 200, 0, welcome.length);
	text(welcome.substring(0, end), 250, 350);
}