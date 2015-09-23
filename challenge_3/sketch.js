function setup() {
	// create canvas
	createCanvas(700, 500);
	noFill();
}
function draw() {
	//change color of background depending on mouse
 if (mouseIsPressed) {
	 background(46, 42, 105)
} else {
	 background(153, 13, 13)
 }
//draw circle
stroke(255, 255, 255);
ellipse(mouseX, mouseY, 40, 40);
//draw lines
line(mouseX -21, mouseY, 0, mouseY);
line(mouseX, mouseY -21, mouseX, 0);
line(700, mouseY, mouseX +21, mouseY);
line(mouseX,700, mouseX, mouseY +21);

}
