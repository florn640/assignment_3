function setup() {
	// create canvas
	createCanvas(700, 500);
	background (0);
	fill(152, 13, 13);
frameRate(100);
}

function draw() {
//draw red squares

//rect(mouseX, mouseY, 40, 40);

//rect(mouseX -21, mouseY, 40, 40);
//rect(mouseX, mouseY -21, 40, 40);
//rect(700, mouseY, mouseX +21, mouseY);
//rect(mouseX,700, mouseX, mouseY +21);
var cuBes= random(0,1);
console.log("The random cuBes value is: " + cuBes);
// draw UFO
if (cuBes > 0 && cuBes < 0.20) {
fill (0, 0, 0)
rect(10, 0, 55, 55);
} else if (cuBes > 0.21 && cuBes < 0.45) {
fill (255, 255, 255)
rect(0, 20, 55, 55);
} else if (cuBes > 0.46 && cuBes < 0.60) {
fill (191, 191, 191)
rect(100, 0, 55, 55);
} else if (cuBes > 0.61 && cuBes < 0.85) {
fill(140, 140, 140)
rect(0, 300, 55, 55);
} else {
fill(100, 100, 100)
rect(0, 100, 55, 55);

	}
}
