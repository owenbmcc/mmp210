/*
	meme v2
	conditional logic
*/

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(0);

	if (mouseIsPressed || mouseX > width/2) {
		ellipse(mouseX, mouseY, 100);
	}
	
}