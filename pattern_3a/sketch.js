/*
	pattern version 3
	4/10/2020
*/

var wSlider;
var heightSlider;

function setup() {
	createCanvas(500, 500);
	noStroke();

	createP("Cell size");
	wSlider = createSlider(1, 100, 40);
	wSlider.input(pattern);

	createP("Height");
	heightSlider = createSlider(-10, height, 300);
	heightSlider.input(pattern);
	
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
	background(51);

	var w = wSlider.value(); // width of one cell
	var h = w; // height of one cell

	for (let x = 0; x <= width; x += w) {
		for (let y = 0; y <= height; y += h) {

			let r = random(0, 50); // red
			let g = random(0, 100); // green
			let b = random(100, 255); // blue

			if (y > heightSlider.value()) {
				r += random(100, 200);
				g += random(50, 150);
				b -= random(100, 200);
			}

			fill(r, g, b);				
			
			rect(x + random(10), y + random(10), w + random(10), h/2 + random(100));
		}
	}

	
}