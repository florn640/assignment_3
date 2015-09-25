function setup() {
	// create canvas
	createCanvas(400, 400);
	//noLoop();
}

function draw() {
	background(40, 50, 10);
	noStroke();
	for (var i = 0; i < 1000; i++) {
		ellipse(random(0, 400), random(0, 400), 10, 10);
	}
}
