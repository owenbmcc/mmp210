/*
	meme v 1
	by owen roberts
	text + images
*/

var title = 'MMP 210';
var description = 'Draws text to the screen. Displays the information specified in the first parameter on the screen in the position specified by the additional parameters. A default font will be used unless a font is set with the textFont() function and a default size will be used unless a font is set with textSize(). Change the color of the text with the fill() function. Change the outline of the text with the stroke() and strokeWeight() functions.';

var lizardImage;
var catImage;

function preload() {
	lizardImage = loadImage('lizard.jpg');
	catImage = loadImage('cat.jpg');
}

function setup() {
	var canvas = createCanvas(640, 600);
	canvas.drawingContext.miterLimit = 2;
	// imageMode(CENTER);
}

function draw() {
	background(220);
	blendMode(BLEND);

	/* image */
	image(lizardImage, 0, 0, width, height/2);
	image(catImage, 0, height/2, width, height/2);



	/* visualize alignment */
	stroke(0);
	strokeWeight(2);
	// line(width/2, 0, width/2, height);
	// line(0, height/2, width, height/2);

	textSize(100);
	fill('plum');
	stroke(255);
	strokeWeight(10);
	textFont('Roboto Mono');

	textAlign(CENTER, BOTTOM);

	var len = title.length; // length of title
	var n = map(frameCount, 0, 60, 0, len); // number of characters to show

	text(title.substring(0, n), width / 2, height / 2);

	var titleWidth = textWidth(title);

	textSize(40);
	noStroke();
	textAlign(LEFT);
	// textLeading(mouseY);

	blendMode(OVERLAY);
	fill(255, 255, 0);
	text(description, width / 2 - titleWidth / 2, height / 2 + 40, titleWidth);
}