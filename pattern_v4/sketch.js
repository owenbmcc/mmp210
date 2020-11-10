/*
	generative pattern
*/

function setup() {
	createCanvas(600, 400);
	pattern();
}

function mousePressed() {
	pattern();
}

function pattern() {
	background(220);

	let w = random(20, 40);
	let h = w;
	let horizon = random(height/2, height - w);

	for (let x = 0; x <= width + w; x += w) { // columns
		for (let y = 0; y <= height + h; y += h) { // rows
			

			let r, g, b;
			if (y < horizon) {
				// more blue
				r = map(y, 0, height, 0, 255);
				g = random(100);
				b = random(200, 255);
			} else {
				// more green
				r = random(100);
				g = random(200, 255);
				b = random(100);
			}

			fill(r, g, b, 127);
			noStroke();

			ellipse(
				x + random(-20, 20), 
				y + random(-10, 10), 
				w + random(50)
			);
			
		}	
	}
}