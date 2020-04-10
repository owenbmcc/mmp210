/*
	nested loop example
	4/10/2020
*/

function setup() {
	createCanvas(500, 500);
	noStroke();
}

function draw() {
	background(51);

	var w = 100; // width of one cell
	var h = w; // height of one cell

	for (let x = 0; x <= width; x += w) {
		for (let y = 0; y <= height; y += h) {
			
			fill('white');
			ellipse(x + w/2, y + h/2, w);  // face

			fill('green');
			ellipse(x + w/2 - 20, y + h/4, w/4); // left eye
			ellipse(x + w/2 + 20, y + h/4, w/4); // right eye

			rect(x + w/4, y + h/2 + h/4, w/2, h/10, 5); // mouth

		}
	}

	
}