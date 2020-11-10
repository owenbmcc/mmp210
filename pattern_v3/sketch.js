/*
	nested loop
*/

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(220);

	let w = 100;
	let h = 100;

	for (let x = 50; x <= width; x += w) { // columns
		for (let y = 50; y <= height; y += h) { // rows
			ellipse(x, y, w, h);

			// add more shapes to create the design
		}	
	}
}