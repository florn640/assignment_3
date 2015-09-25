function setup() {
	// create a place to draw
	createCanvas(640, 500);
	noStroke();
	loop();
}

function draw() {
	// clear the background
	background(115, 116, 171);

noFill();
//draw black circles
stroke (0, 0, 0);
	for(i = 0; i < 100; i++) {
   ellipse(320, 250, i * 10, i * 10)
//draw white circles
  }

stroke (255, 255, 255);
		for(i = 0; i < 100; i++) {
	   ellipse(320, 250, i * 10 * 2, i * 10 * 2)

	  }


}
