
// loop repeats something
for (let i = 100; i >= 1; i--) {
	console.log('i', i);
}

/*
	loop example
	3.23.2020
*/

function setup() {
	createCanvas(640, 360);
	noStroke();
}

function draw() {
	background('lightblue');

	for (let x = 0; x <= width; x += 100) {

		let y = 100 + x / 10;
		let s = x/4;

		fill('plum');
		ellipse(x, y, s); // face

		fill('gold');
		ellipse(x + 20, y - 10, s/4); // right eye
		ellipse(x - 20, y - 10, s/2); // left eye

		rect(x - 10, y + 20, s/2, s/8, s/16);
	}

}
