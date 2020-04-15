/*
	sound example
	4.15.2020
*/

// global sound variables
var birdSound;
var music;

function preload() {
	birdSound = loadSound("birds.wav");
	music = loadSound("Rolemusic_-_Omou_matsu.mp3");
}

function setup() {
	createCanvas(640, 360);
	birdSound.playMode("restart"); // the default is "sustain"
}

function draw() {
	if (music.isPlaying()) {
		background('green');
	} else {
		background(220);
	}

	var volume = map(mouseY, 0, height, 1, 0);
	music.setVolume(volume);

	noStroke();
	fill('white');
	rect(0, mouseY, width, 10);

	// var pan = map(mouseX, 0, width, -1, 1);
	// music.pan(pan);

	var rate = map(mouseX, 0, width, 0.5, 2);
	music.rate(rate);

	rect(mouseX, 0, 10, height);

}

function mousePressed() {
	birdSound.play();

	if (music.isPlaying()) {
		music.pause();
		// music.stop();
	} else {
		music.play();
	}
}