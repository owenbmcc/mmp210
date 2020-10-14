/*
	meme v3-2
	transformation + animation
	translate
	scale
	rotate
	shear
*/

var lizardImage;
var s = 1; // scale
var scaleSpeed = 0.01;

var textShear = 0;

function preload() {
	lizardImage = loadImage('lizard.jpg');
}

function setup() {
	createCanvas(640, 400);
	noStroke();
	imageMode(CENTER);
}

function draw() {

	background(220);

	translate(width / 2, height / 2);

	push();
	scale(s);
	s += scaleSpeed;
	if (s > 2 || s < 0.75) {
		scaleSpeed *= -1;
	}

	image(lizardImage, 0, 0);
	pop();


	shearX(textShear);
	textShear += 0.01;

	fill('yellow');
	textSize(100);
	textAlign(CENTER, CENTER);
	text("I'm a lizard", 0, 0);

}

