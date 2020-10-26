/*
	interaction 2 - collisions
*/
var r, g, b;
var explosionSound;

function preload() {
	explosionSound = loadSound('Explosion-1.wav');
}

function setup() {
	createCanvas(640, 360);
	r = random(255);
	g = random(255);
	b = random(255);
}

function mousePressed() {

	// click circle
	var d = dist(100, 100, mouseX, mouseY);
	if (d < 50) {
		// change the background color
		r = random(255);
		g = random(255);
		b = random(255);
	}

	// click rectangle
	if (mouseX > 400 && mouseX < 500 && 
		mouseY > 100 && mouseY < 150) {
		explosionSound.play();
	}
}

function draw() {
	background(r, g, b);

	// circle button
	fill('plum');
	var d = dist(100, 100, mouseX, mouseY);
	if (d < 50) {
		fill('yellow');
	}
	circle(100, 100, 100);

	
	// rect button
	fill('plum');
	if (mouseX > 400 && mouseX < 500 && mouseY > 100 && mouseY < 150) {
		fill('yellow');
	}

	rect(400, 100, 100, 50);
}