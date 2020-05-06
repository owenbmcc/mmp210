/*
	sound sampler with functions
	5.6.2020
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
	background(51);

	// calling or invoking the function
	button(music, 100, 100, 100);

	button(jumpSound, 100, 300, 50);
	button(laserSound, 200, 300, 50);
	button(powerUpSound, 300, 300, 50);
}

// function definition
function button(sound, x, y, s) {
	// detect if mouse is in button
	var d = dist(x, y, mouseX, mouseY);
	if (d < s / 2) {
		if (mouseIsPressed) {
			fill('gold');

			if (!sound.isPlaying())  {
				sound.play();
			}

			// shorter sounds
			/*
			if (sound.isPlaying()) {
				sound.pause();
			} else {
				sound.play();
			}
			*/

		} else {
			stroke('gold');
			strokeWeight(4);			
		}
	} else {
		noStroke();
		fill('plum');
	}

	ellipse(x, y, s);
}