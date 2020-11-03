/*
	pattern version 2
	generative pattern
	using random
*/

function setup() {
	createCanvas(640, 360);
	rectMode(CENTER);
	pattern();
}

function mousePressed() {
	pattern();
}

function pattern() {
	background('darkblue');

	// mountains
	for (let x = random(-200); x < width; x += random(100, 200)) {
		// brown
		let r = random(50, 82);
		let g = random(40, 65);
		let b = random(30, 51);
		fill(r, g, b); 
		noStroke();
		let y = random(50, 200);
		let w = random(200, 300);
		triangle(x, height, x + w/2, y, x + w, height);
	}

	// trees
	for (let x = 0; x < width; x += random(5, 100)) {
		fill('rosybrown');
		let y = random(50);
		let w = random(4, 10);
		let h = random(50, 100);
		rect(x, height - y, w, h);

		// random green
		var r = random(50);
		var g = random(50, 200);
		var b = random(50);
		
		fill(r, g, b);
		let treeWidth = random(10, 40);
		let treeHeight = random(treeWidth, treeWidth * 2);
		ellipse(x, height - y - h/2, treeWidth, treeHeight);
	}


	// clouds
	var cloudNumber = random(3, 10);
	for (let i = 0; i < cloudNumber; i++) {
		let x = random(width);
		let y = random(height/2);
		let w = random(40, 80);
		let h = random(20, 40);
		fill('white');

		var clusterNumber = random(2,4);
		for (let j = 0; j < clusterNumber; j++) {
			ellipse(x + random(-20, 20), y + random(-5, 5), w, h);
		}
		
	}
}