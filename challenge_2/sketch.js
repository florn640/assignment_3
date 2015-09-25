function setup() {
	// create a place to draw
	createCanvas(640, 500);
	noStroke();
	loop();
}

function draw() {
	// purple background
	background(115, 116, 170);

noFill();
//draw black circles
stroke (0, 0, 0);
	for(i = 0; i < 100; i++) {
   ellipse(320, 250, i * 18, i * 18)
//draw white circles
  }

stroke (255, 255, 255);
		for(i = 0; i < 100; i++) {
	   ellipse(320, 250, i * 18 * 2, i * 18 * 2)

	  }


}
