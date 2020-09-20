/*
	self portrait v2 
	by owen roberts
*/



// global scope
var x; // character origin
var y = 150;

var eyeSize = 100;
var mouthSize = eyeSize;

var faceRed = 162;
var faceGreen = 108;
var faceBlue = 227;

function setup() {
	createCanvas(640, 360);
	x = width / 2;
}


function draw() {
	background(51);

	// face
	noStroke();
	fill(faceRed, faceGreen, faceBlue); // purple
	triangle(x - 120, y - 100, x + 100, y - 90, x, y + 210);

	// eyes
	fill("LIGHTGOLDENRODYELLOW");
	circle(x - 70, y, eyeSize); // left

	fill("#FFFF0B"); // similar to lightgoldenrodyellow
	ellipse(x + 50, y, eyeSize, eyeSize / 2); // right

	// mouth
	stroke("LIGHTGOLDENRODYELLOW");
	strokeWeight(10);
	noFill();

	var mouthHeight = map(mouseY, 0, height, mouthSize / 5, mouthSize);
	
	rect(x - 50, y + 100, mouthSize, mouthHeight, mouthSize / 10);

	// hair
	stroke(254, 212, 143); // yellowish brown

	line(x - 100, y - 110, x - 70, y - 70);
	line(x - 80, y - 110, x - 50, y - 70);
	line(x - 60, y - 110, x - 30, y - 70);
	line(x - 40, y - 110, x - 10, y - 70);
	line(x - 20, y - 110, x + 10, y - 70);
	line(x, y - 110, x + 30, y - 70);
	line(x + 20, y - 110, x + 50, y - 70);
}