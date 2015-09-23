function setup() {
	// create a place to draw
	createCanvas(700, 500);
	noFill();
}
function draw() {
	//noStroke();
 if (mouseIsPressed) {
	 background(46, 42, 105)
} else {
	 background(153, 13, 13)
 }
//draw circle
stroke(255, 255, 255);
ellipse(mouseX, mouseY, 40, 40);
line(mouseX, mouseY, 0, mouseY);
line(mouseX, mouseY, mouseX, 0);
line(700, mouseY, mouseX, mouseY);
line(mouseX,700, mouseX, mouseY);

}
