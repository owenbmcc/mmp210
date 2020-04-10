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
			push();
			translate(x, y);
			
			fill('white');
			ellipse(50, 50, w); //face

			fill('green');
			ellipse(30, 30, w/5); // left eye
			ellipse(80, 30, 20); // right eye

			rect(25, 70, 50, 10, 5); // mouth

			
			pop();
		}
	}

	
}