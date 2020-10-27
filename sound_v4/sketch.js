/*
	custom functions
	mouse interaction sound sampler
*/

var explosion1, explosion2, explosion3;
var chickens, bg;

function preload() {
	explosion1 = loadSound('Explosion-1.wav');
	explosion2 = loadSound('Explosion-2.wav');
	explosion3 = loadSound('Explosion-3.wav');
	chickens = loadSound('chickens.mp3');
	bg = loadSound('background.mp3');
}

function setup() {
	createCanvas(640, 360);
	noStroke();
	bg.setVolume(0.1);
}

function draw() {
	background(220);

	button(100, 100, 100, explosion1);
	button(300, 100, 100, explosion2);
	button(500, 100, 100, explosion3);

	rectButton(100, 300, 100, 50, chickens);
	rectButton(300, 300, 150, 50, bg);
	
}

function rectButton(x, y, w, h, sound) {
	// detect mouse inside rect
	if (mouseX > x && mouseX < x + w &&
		mouseY > y && mouseY < y + h) {
		fill('yellow');

		if (mouseIsPressed && !sound.isPlaying()) {
			sound.play();
		}

	} else {
		fill('plum');
	}

	rect(x, y, w, h);
}

function button(x, y, s, sound) {
	var d = dist(x, y, mouseX, mouseY);
	// calculate distance
	if (d < s / 2) {
		// inside the button
		fill('yellow');

		if (mouseIsPressed && !sound.isPlaying()) {
			sound.play();
		}

	} else {
		// outside the button
		fill('plum');
	}
	ellipse(x, y, s);
}






// function declaration - with arguments
function banana(x, y) {

	push();
	translate(x, y);
	
	stroke('yellow');
	strokeWeight(24);
	noFill();
	curve(200, -50, 0, 0, 0, 100, 100, 150);

	stroke(0);
	strokeWeight(1);
	curve(200, -50, 0, 0, 0, 100, 100, 150);
	pop();
}