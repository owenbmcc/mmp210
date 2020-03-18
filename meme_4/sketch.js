/*
	meme version 4
	transformation + animation
	3.18.2020
*/

// global scope
var catImage;
var s = 1;  // scale for cat image
var speed = 0.01; // speed for scale

function preload() {
	catImage = loadImage("cat.jpg");
}

function setup() {
	createCanvas(500, 380);
}

function draw() {
	background(0);

	// mmp 210 text styles 
	textSize(80);
	textFont('Trade Winds');
	textAlign(CENTER, CENTER);
	fill('plum');

	// first transformation
	translate(width/2, height/2);


	push();
	scale(s);
	s += speed;

	imageMode(CENTER);
	image(catImage, 0, 0);

	if (s > 2 || s < 1) {
		speed *= -1;
	}

	pop();


	// calculate rotation angle
	var r = frameCount * PI / 100;

	push();
	shearY(r);
	text("MMP 210", 0, 0);
	pop();

	shearX(r);
	text("MMP 210", 0, 0);

}