/*
	pattern version 1
	3.23.2020
*/

var columnSlider;
var greenSlider;
var eyeSlider;
var circleSlider;

function setup() {
	createCanvas(640, 360);
	noStroke();

	createP("Column width");
	columnSlider = createSlider(20, 200, 100);
	columnSlider.input(pattern);

	createP("Green color");
	greenSlider = createSlider(0, 255, 200);
	greenSlider.input(pattern);

	createP("Eye");
	eyeSlider = createSlider(5, 50, 5);
	eyeSlider.input(pattern);

	createP("Circles");
	circleSlider = createSlider(40, 200, 40);
	circleSlider.input(pattern);

	var patternButton = createButton("New Pattern");
	patternButton.mousePressed(pattern);

	var saveButton = createButton("Save Image");
	saveButton.mousePressed(saveImage);

	pattern();
}

function saveImage() {
	save("pattern.png");
}

function pattern() {
	background('lightblue');

	for (let x = 0; x <= width; x += columnSlider.value()) {

		let r = random(100);
		let g = random(greenSlider.value());
		let b = random(100, 150);

		let s = random(40, 120); // size 
		let y = random(s/2, height - s/2);

		// self portrait
		fill(r, g, b);
		ellipse(x, y, s); // face

		fill('gold');
		ellipse(x + random(eyeSlider.value()), y - 10, s/4 + random(5)); // right eye
		ellipse(x - 20, y - 10, s/4); // left eye

		rect(x - 10, y + 20, s/2, s/8, s/16);


		// pattern
		stroke(r, g, b);
		strokeWeight(4);
		line(x, 0, x + 100, height);
		line(x + 100, 0, x, height);
		noFill();
		ellipse(x + 50, random(200 - circleSlider.value(), 200 + circleSlider.value()), 40);
	}

}
