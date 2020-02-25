/*
	meme version 1 example
	2.25.2020
*/

function setup() {
	var canvas = createCanvas(500, 500);
	canvas.drawingContext.miterLimit = 2;
}

function draw() {
	background('gray');

	textSize(100);
	fill('blue');
	stroke('pink');
	strokeWeight(20);
	textStyle(ITALIC);
	textFont('Segoe UI');
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