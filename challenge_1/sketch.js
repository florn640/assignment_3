function setup() {
	// create a place to draw
	createCanvas(600, 450);
	noStroke();
	noLoop();
}
function draw() {
	background(51, 52, 55);


	for(var i = 0; i < 10; i++){
		stroke(255,255, 255)
		fill(i* 40, 0, 0);
		rect(i*60, 200, 45, 45);
	}
}
