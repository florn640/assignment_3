var ballX = 100;
var ballY = 100;


function setup() {
	createCanvas(600, 500);
	noStroke();


}

function draw() {
	background(0, 0, 0);
	fill(255, 255, 255);

//function mouseMoved() {

	//for (var i = 0; i < 1; i++){
	//	ballX = ballY + 1;
		//ellipse(mouseX+random(5), mouseY+random(5), 50, 50);

	if (mouseX > ballX) {
	 ballX = ballX + 10;
 } else {
	ballX = ballX - 10;
 }

 if (mouseY> ballY) {
	ballY = ballY + 10;
 } else {
 ballY = ballY - 10;
 }

 ellipse(ballX, ballY, 50, 50);



}
