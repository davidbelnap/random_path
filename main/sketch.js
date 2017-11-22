var x;
var y;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	x = canvas.width/2;
	y = canvas.height/2;
	background(51);
}

function draw() {
	stroke(244);
	strokeWeight(2);
	point(x, y);

	var r = floor(random(4));

	switch (r) {
		case 0:
			x = x + 1;
			break;
		case 1:
			x = x - 1;
			break;
		case 2:
			y = y + 1;
			break;
		case 3:
			y = y - 1;
			break;
	}
}