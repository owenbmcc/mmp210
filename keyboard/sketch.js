/*
	keyboard sampler
	4.15.2020
*/

var music;
var jumpSound, laserSound, powerUpSound;

function preload() {
	music = loadSound("Rolemusic_-_Omou_matsu.mp3");
	jumpSound = loadSound("Jump.wav");
	laserSound = loadSound("Laser_shoot.wav");
	powerUpSound = loadSound("Powerup.wav");
}

function setup() {
	createCanvas(640, 360);
	noStroke();
}

function draw() {
	if (music.isPlaying()) {
		background('lightgreen');
	} else {
		background(51);
	}

	if (jumpSound.isPlaying()) {
		fill('plum');
		rect(0, 0, 100, height);
	}

	if (laserSound.isPlaying()) {
		fill('blue');
		rect(200, 0, 100, height);
	}

	if (powerUpSound.isPlaying()) {
		fill('gold');
		rect(400, 0, 100, height);
	}

	// instructions
	fill('white');
	textSize(20);
	text('hit space, a, b and c keys for sound', 10, 20);
}

function keyPressed() {

	// play bg music
	if (keyCode == 32) {
		if (music.isPlaying()) {
			music.pause();
		} else {
			music.play();
		}
	}

	// play sound effects
	if (keyCode == 65) { // a key
		jumpSound.play();
	}

	if (keyCode == 66) { // b key
		laserSound.play();
	}

	if (keyCode == 67) { // c key
		powerUpSound.play();
	}
}