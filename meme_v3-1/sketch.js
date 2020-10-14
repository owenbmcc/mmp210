/*
	meme v3
	animated meme/logo
*/

var x = 0;
var y = 100;
var s = 100; // size
var xSpeed = 3;
var ySpeed = 3;
var c; // color

var count = 0;

var catImage;

function preload() {
	catImage = loadImage('cat.png');
}

function setup() {
	createCanvas(640, 360);
	noStroke();
	imageMode(CENTER);

	var r = random(255);
	var g = random(255);
	var b = random(255);
	c = color(r, g, b);

}

function draw() {
	background(220);
	
	tint(c);
	image(catImage, x, y, s, s);

	fill(c);
	// ellipse(x, y, s);
	textSize(s/2);
	textAlign(CENTER, CENTER);
	text("I'm a cat", x, y);

	count++;
	if (count == 60) {
		s = random(100, 200);
		count = 0;
	}

	x += xSpeed;
	y += ySpeed;

	// hits right or left side of canvas
	if (x > width || x < 0) {
		// reverse speed
		xSpeed *=  -1;

		var r = random(255);
		var g = random(255);
		var b = random(255);
		c = color(r, g, b);
	}

	// hits top or bottom side of canvas
	if (y > height || y < 0) {
		// reverse speed
		ySpeed *=  -1;

		var r = random(255);
		var g = random(255);
		var b = random(255);
		c = color(r, g, b);
	}


}