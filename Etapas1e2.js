// Bruna Caroliny Custódio da Silva e Leticia Nascimento de Oliveira
var x = 27;
var y = 470;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(270,66,60);
  if (keyIsDown(LEFT_ARROW))
    x-=5;

  if (keyIsDown(RIGHT_ARROW))
    x+=5;

  if (keyIsDown(UP_ARROW))
    y-=5;

  if (keyIsDown(DOWN_ARROW))
    y+=5;
	
  ellipse(x, y, 50, 50);
  rect(300, 445, 50, 50)
}
