function setup() {
	// create a place to draw
	createCanvas(640, 500);
	noStroke();
}

var ballX = 200;
var ballY = 100;
var ballSpeedX = 3;
var ballSpeedY = 3;

var ball2X = 200;
var ball2Y = 100;
var ballSpeed2X = 3;
var ballSpeed2Y = 3;

function draw() {
// change position
	ballX = ballX + ballSpeedX;
	ballY = ballY + ballSpeedY;

	ball2X = ball2X + ballSpeed2X;
	ball2Y = ball2Y + ballSpeed2Y;

	// right
	if (ballX > width) {
		ballSpeedX = -ballSpeedX;
	}

	// bottom
	if (ballY > height) {
		ballSpeedY = -ballSpeedY;
	}

	// left
	if (ballX < 0) {
		ballSpeedX = -ballSpeedX;
	}

	// top
	if (ballY < 0) {
		ballSpeedY = -ballSpeedY;
	}


	background(0);
	ellipse(ballX, ballY, 50, 50);
	




}
