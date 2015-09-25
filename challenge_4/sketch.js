function setup() {
	// create a place to draw
	createCanvas(640, 500);
	noStroke();
}

var ballX = 200;
var ballY = 100;
var ballSpeedX = 3;
var ballSpeedY = 3;

var ball2X = 400;
var ball2Y = 200;
var ballSpeed2X = 3;
var ballSpeed2Y = 3;

function draw() {
	// change position
	ballX = ballX + ballSpeedX;
	ballY = ballY + ballSpeedY;

	ball2X = ball2X + ballSpeed2X;
	ball2Y = ball2Y + ballSpeed2Y;

	//ball1
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

	//ball2

	// right
	if (ball2X > width) {
		ballSpeed2X = -ballSpeed2X;
	}

	// bottom
	if (ball2Y > height) {
		ballSpeed2Y = -ballSpeed2Y;
	}

	// left
	if (ball2X < 0) {
		ballSpeed2X = -ballSpeed2X;
	}

	// top
	if (ball2Y < 0) {
		ballSpeed2Y = -ballSpeed2Y;
	}


	background(0);
	ellipse(ballX, ballY, 50, 50);
	ellipse(ball2X, ball2Y, 50, 50);



}
