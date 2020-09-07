/*
	self portrait v1 
	by owen roberts
*/

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background('green');

	// face
	noStroke();
	fill(162, 108, 227); // purple
	triangle(380, 50, 600, 60, 500, 360);
	
	
	// eyes
	fill("LIGHTGOLDENRODYELLOW");
	circle(430, 150, 100); // left
	fill("#FFFF0B"); // similar to lightgoldenrodyellow
	ellipse(550, 150, 100, 50); // right

	// mouth
	stroke("LIGHTGOLDENRODYELLOW");
	strokeWeight(10);
	noFill();
	rect(450, 250, 100, 20, 10);

	// hair
	stroke(254, 212, 143); // yellowish brown
	line(400, 40, 430, 80);
	line(420, 40, 450, 80);
	line(440, 40, 470, 80);
	line(460, 40, 490, 80);
	line(480, 40, 510, 80);
	line(500, 40, 530, 80);
	line(520, 40, 550, 80);

}