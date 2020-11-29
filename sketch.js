var wall, thickness;
var bullet,speed, weight;
var deform;

function setup() {
  createCanvas(1600,400);

    speed = random(55,90);
    weight = random(400,1500);
    thickness = random(22,83);


    bullet = createSprite(50, 200, 50, 5);
    bullet.velocityX = speed;
    bullet.shapeColour = 80;

    wall = createSprite(1200,200,thickness, height/2);
    wall.shapeColour = 80;

  
}

function draw() {
  background(0); 
  
  if(bullet.x - wall.x < wall.width/2 + bullet.width/2 && 
    wall.x - bullet.x < wall.width/2 + bullet.width/2 && 
    wall.y - bullet.y < wall.width/2 + bullet.width/2 &&
    bullet.y - wall.y < wall.width/2 + bullet.width/2){

    deform = (0.5 * weight * speed * speed)/22500;  
    if(deform <= 100){
      wall.shapeColor = "green";
    }
    else {
      wall.shapeColor = "red";
    }

    bullet.velocityX = 0;
  } 

  drawSprites();
}