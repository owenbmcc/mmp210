/*
	pattern version 3b
	4/10/2020
*/

var bgSlider;
var redSlider;

function setup() {
	createCanvas(500, 500);
	noStroke();

	createP("Background Color");
	bgSlider = createSlider(0, 255, 51);
	bgSlider.input(pattern);

	createP("Red Color");
	redSlider = createSlider(0, 255, 0);
	redSlider.input(pattern);

	var patternButton = createButton("Pattern");
	patternButton.mousePressed(pattern);

	var saveButton = createButton("Save");
	saveButton.mousePressed(saveImage);

	pattern();
}

function saveImage() {
	save("pattern.png");
}


function pattern() {
	background(bgSlider.value());

	var w = 40; // width of one cell
	var h = w; // height of one cell

	for (let x = 0; x <= width; x += w) {
		for (let y = 0; y <= height; y += h) {
			push();
			translate(x, y);

			var r = redSlider.value(); // red
			var g = random(100, 255);
			var b = random(50, 150);

			stroke(r, g, b);
			strokeWeight(2);

			var randomChoice = random(4);
			if (randomChoice < 1) {
				line(0, 0, w, h);
			} else if (randomChoice < 2) {
				line(0, h, w, h);
			} else if (randomChoice < 3) {
				line(w, 0, w, h);
			} else {
				line(w, 0, 0, h);
			}
			
			pop();
		}
	}

	
}