function setup() {
	// create a place to draw
	createCanvas(600, 450);
	noStroke();
	noLoop();
}
function draw() {
	background(51, 52, 55);
	noFill();
	colorMode(HSL, 165);
	for(var i = 0; i < 100; i++){
		fill(i, 100, 50);
		stroke(255,0)
		rect(i*60, 200, 45, 45);
	}
}
