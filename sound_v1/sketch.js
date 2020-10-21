/*
	sound sampler v 1
*/

var explosionSound;
var bgSound;

function preload() {
	explosionSound = loadSound('Explosion-3.wav');
	bgSound = loadSound('background.mp3');
}

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(220);

	if (bgSound.isPlaying()) {
		background('plum');
	}

	// visualize sound time
	var currentTime = bgSound.currentTime();
	var duration = bgSound.duration();
	var timeElapsed = map(currentTime, 0, duration, 0, width);

	fill('gold');
	noStroke();
	rect(0, height - 100, timeElapsed, 100);

	// change volume
	var vol = map(mouseY, 0, height, 1, 0);
	bgSound.setVolume(vol);

	rect(0, mouseY, width, height);

	// pan left and right
	// var pan = map(mouseX, 0, width, -1, 1, true);
	// bgSound.pan(pan);

	var rate = map(mouseX, 0, width, 0.25, 3, true);
	bgSound.rate(rate);

	stroke('blue');
	strokeWeight(10);
	line(mouseX, 0, mouseX, height);

}

function mousePressed() {
	if (bgSound.isPlaying()) {
		bgSound.pause();
	} else {
		bgSound.play();
	}
}