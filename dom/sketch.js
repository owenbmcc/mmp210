/*
	dom example
	4.1.2020
*/

var angleSlider;
var nameInput;

function setup() {
	var canvas = createCanvas(640, 360);
	canvas.parent("sketch");
	noStroke();

	nameInput = createInput("Type your name");
	nameInput.position(10, 10);
	nameInput.parent("sketch");

	angleSlider = createSlider(0, TWO_PI, 0, PI * 0.01);
	angleSlider.input(pattern);
	angleSlider.parent("sketch");
	angleSlider.position(10, 40);

	var patternButton = createButton("New Pattern");
	patternButton.mousePressed(pattern);
	patternButton.parent("sketch");
	patternButton.position(220, 10);

	var saveButton = createButton("Save Image");
	saveButton.mousePressed(saveImage);
	saveButton.parent("sketch");
	saveButton.position(350, 10);
	

	pattern();
}

function saveImage() {
	save("pattern.jpg");
}

function pattern() {
	background('lightblue');

	for (let x = 0; x <= width + 100; x += 100) {

		push();
		translate(x, height/2);
		
		rotate(angleSlider.value());
		
		fill('plum');
		rect(0, 0, random(100, 200), random(100, 200));
		pop();
	}

	textAlign(CENTER, CENTER);
	textSize(100);
	fill('blue');
	stroke('plum');
	strokeWeight(20);
	text(nameInput.value(), width/2, height/2);
}

