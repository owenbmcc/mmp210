/*
	pattern version 1
	javascript loops
*/

function setup() {
	createCanvas(640, 360);
	rectMode(CENTER);
}

function draw() {
	background(220);

	// landscape

	// mountains
	for (let x = -100; x < width; x += 100) {
		
		let r = map(x, 0, width, 0, 255);
		fill(r, 42, 42);
		
		stroke('green');
		strokeWeight(6);
		triangle(x, height + 20, x + 100, 100, x + 200, height);
	}

	// trees
	for (let x = 20; x < width; x += 40) {
		noStroke();
		fill('rosybrown');
		rect(x, height - 50, 10, 100);

		let g = map(x, 0, width, 200, 100);
		fill(0, g, 0);
		ellipse(x, height - 100, 50, 100);
	}

	// clouds 
	let y = 20;
	for (let x = 20; x < width; x += 120) {
		fill('white');

		ellipse(x, y, 50);
		ellipse(x + 25, y, 50);
		ellipse(x, y + 20, 50);
		ellipse(x - 20, y + 10, 50);

		y += 15;
	}
}
