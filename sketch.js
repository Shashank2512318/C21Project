var bullet, speed, weight;
var wall, thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(100, 200, 40, 25);
  bullet.shapeColor= color(255, 255, 255)
  bullet.velocityX= speed= random(233, 321)
  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor= color(255, 255, 255);
  
  
  weight= random(30, 52);
  thickness= random(22, 83);
}

function draw() {
  background(255,0,0);
  
hascollided(wall, bullet);
  
  drawSprites();
}

