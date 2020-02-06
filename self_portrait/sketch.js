/*
	self potrait
	by owen 
	2.6.2020
	class example
*/

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(100, 200, 100);

	// shapes with xy coordinate + size 

	fill('green');
	stroke('white');
	strokeWeight(5);	

	// face area
	ellipse(200, 180, 200);  // face

	fill(0, 81, 82, 127);
	stroke(0, 81, 82);
	ellipse(220, 160, 20); // right eye
	ellipse(160, 160, 30, 10); // left eye

	// mouth
	rectMode(CENTER);
	stroke('#5DADE2');	
	strokeWeight(2);
	noFill();
	rect(200, 220, 100, 20, 10);

	// right ear
	stroke('white');
	noFill();
	arc(290, 180, 50, 60, -HALF_PI, HALF_PI);
	arc(290, 180, 40, 50, -HALF_PI, HALF_PI);

	// shapes that are only xy points

	// hair
	line(150, 70, 170, 100);
	line(160, 70, 180, 100);
	line(170, 70, 180, 100);
	line(180, 70, 190, 100);
	line(190, 70, 200, 100);

	// nose
	fill('DARKTURQUOISE');
	noStroke();
	triangle(190, 180, 180, 200, 220, 190);

}