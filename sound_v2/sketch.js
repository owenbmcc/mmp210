/*
	sound sampler v 2
*/

var explosionSound1, explosionSound2, explosionSound3;
var chickensSound;

function preload() {
	explosionSound1 = loadSound('Explosion-1.wav');
	explosionSound2 = loadSound('Explosion-2.wav');
	explosionSound3 = loadSound('Explosion-3.wav');
	chickensSound = loadSound('chickens.mp3');
}

function setup() {
	createCanvas(640, 360);
	chickensSound.playMode('restart');
}

function draw() {
	background(220);

	if (chickensSound.isPlaying()) {
		background('yellow');
	}

	if (explosionSound1.isPlaying()) {
		fill(255,0,0,127); // red transparent
		noStroke();
		ellipse(random(width), random(height), random(100, 200));
		ellipse(random(width), random(height), random(100, 200));
		ellipse(random(width), random(height), random(100, 200));
		ellipse(random(width), random(height), random(100, 200));
		ellipse(random(width), random(height), random(100, 200));
		ellipse(random(width), random(height), random(100, 200));
		ellipse(random(width), random(height), random(100, 200));
	}

	if (explosionSound2.isPlaying()) {
		fill(255,255,0,127); // yellow transparent
		noStroke();
		rect(random(width), random(height), random(100, 200), random(100, 200));
		rect(random(width), random(height), random(100, 200), random(100, 200));
		rect(random(width), random(height), random(100, 200), random(100, 200));
		rect(random(width), random(height), random(100, 200), random(100, 200));
		rect(random(width), random(height), random(100, 200), random(100, 200));
		rect(random(width), random(height), random(100, 200), random(100, 200));
		
	}

	if (explosionSound3.isPlaying()) {
		fill(0,255,255,127); // blue/green transparent
		noStroke();
		ellipse(random(width), random(height), random(100, 200));
		ellipse(random(width), random(height), random(100, 200));
		ellipse(random(width), random(height), random(100, 200));
		ellipse(random(width), random(height), random(100, 200));
		ellipse(random(width), random(height), random(100, 200));
		ellipse(random(width), random(height), random(100, 200));
		ellipse(random(width), random(height), random(100, 200));
	}

}

function keyPressed() {
	if (keyCode == 13) { // enter key
		chickensSound.play(); 
	}

	if (keyCode == 65) { // a key
		explosionSound1.play();
	}

	if (keyCode == 66) { // b key
		explosionSound2.play();
	}

	if (keyCode == 67) { // c key
		explosionSound3.play();
	}

	if (keyCode == 83) { // s
		save();
	}
}