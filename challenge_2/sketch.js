function setup() {
	// create a place to draw
	createCanvas(640, 500);
	noStroke();
}

function draw() {
	// clear the background
	background(115, 116, 171);

	for(var i = 1; i < 38; i++){
		stroke(255, 255,255)
		ellipse(20, 80, 50, 50);
	if ( i === 2){
		stroke(255, 255, 255);
 } else {
    fill(0, 0, 0);
}
}

}
