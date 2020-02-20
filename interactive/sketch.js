/*
	interactive self potrait
	by owen 
	2.18.2020
	class example
*/

//  global scope

// position variables
var x;  // 200; // origin for face
var y = 180;

// size variables
var s = 200; // size of the face

function setup() {
	// setup scope
	createCanvas(800, 360);
	x = width/2;
}

function draw() {
	// draw scope
	background(100, 200, 100);

	// shapes with xy coordinate + size 

	fill('green');
	stroke('white');
	strokeWeight(5);	

	// face area

	// x = mouseX;
	// y = mouseY;
	ellipse(x, y, s);  // face
	
	
	// x++;
	// s++;

	fill(0, 81, 82, 127);
	stroke(0, 81, 82);
	ellipse(x + 20, y - 20, s/10); // right eye
	ellipse(x - 40, y - 20, s/8, s/20); // left eye

	// mouth
	rectMode(CENTER);
	stroke('#5DADE2');	
	strokeWeight(5);
	noFill();

	var mouthHeight = map(mouseX, 0, width, 10, 150);
	rect(x, y + 40, 100, mouthHeight, 10);

	// right ear
	stroke('white');
	noFill();
	arc(x + 90, y, 50, 60, -HALF_PI, HALF_PI);
	arc(x + 90, y, 40, 50, -HALF_PI, HALF_PI);

	// shapes that are only xy points

	// hair
	line(x - 50, y - 110, x - 40, y - 80);
	line(x - 40, y - 110, x - 30, y - 80);
	line(x - 30, y - 110, x - 20, y - 80);
	line(x - 20, y - 110, x - 10, y - 80);
	line(x - 10, y - 110, x, y - 80);

	// nose
	fill('DARKTURQUOISE');
	noStroke();
	triangle(x - 10, y, x - 20, y + 20, x + 20, y + 10);

}