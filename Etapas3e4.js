var x = 27;
var y = 470;
var xd = 0;
var yd = 0; 
var estadoDisparo = false;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(270,66,60);
  if (keyIsDown(LEFT_ARROW)){
    x-=5;
  }  

  if (keyIsDown(RIGHT_ARROW)){
    x+=5;
  }  

  if (keyIsDown(UP_ARROW)){
    y-=5;
  }  

  if (keyIsDown(DOWN_ARROW)){
    y+=5;
  }
  ellipse(x, y, 50, 50);
  x = x + 3
  rect(300, 445, 50, 50);
  if (x > 500){
    x = -random(68);
  }  
  if (keyIsDown(CONTROL) && ! estadoDisparo){
    xd = x;
    yd = y;
    estadoDisparo = true;
  }  
  if(estadoDisparo){
    ellipse(xd, yd, 9, 9);
    yd = yd - 10;
    if(yd < 0){
      estadoDisparo = false;
    }  
  }
  
   
  
}