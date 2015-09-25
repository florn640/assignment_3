function setup() {
	createCanvas(600, 500);


}

function draw() {
	background(0, 0, 0);
	noStroke();
	fill(255, 255, 255);

//function mouseMoved() {

	for (var i = 0; i < 1; i++){
		ellipse(mouseX+random(-5, 5), mouseY+random(-5, 5), 50, 50);

	}

}
