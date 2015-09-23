function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
	noLoop();
}
function draw() {
	background(51, 50, 50);
	noFill();
	colorMode(HSL, 200);
	for(var i = 0; i < 100; i++){
		fill(i, 100, 50);
		stroke(255,0)
		rect(i*55, 150, 40, 40);
	}
}
