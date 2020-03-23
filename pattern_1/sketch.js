/*
	pattern version 1
	3.23.2020
*/

function setup() {
	createCanvas(640, 360);
	noStroke();
	pattern();
}

function mousePressed() {
	pattern();
}

function pattern() {
	background('lightblue');

	for (let x = 0; x <= width; x += 100) {

		let r = random(100);
		let g = random(100, 200);
		let b = random(100, 150);

		stroke(r, g, b);
		strokeWeight(4);
		line(x, 0, x + 100, height);
		line(x + 100, 0, x, height);
		noFill();
		ellipse(x + 50, random(160, 200), 40);


		let s = random(40, 120);
		let y = random(s/2, height - s/2);

		// self portrait
		fill(r, g, b);
		ellipse(x, y, s); // face

		fill('gold');
		ellipse(x + random(20), y - 10, s/4 + random(5)); // right eye
		ellipse(x - 20, y - 10, s/4); // left eye

		rect(x - 10, y + 20, s/2, s/8, s/16);
	}

}
