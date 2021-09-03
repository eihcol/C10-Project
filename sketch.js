var shipImg;
var ship;
var seaImg;
var sea;
function preload(){
seaImg = loadImage("sea.png");
shipImg = loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,180,400,30);
  sea.addImage("seaImg");

  ship = createSprite(50,160,20,50);
  ship.addImage("shipImg");
  edges = createEdgeSprites();
  ship.scale = 0.5;
  ship.x = 50;
  

}

function draw() {
  background("blue");
  sea.velocityX = -5;

  if(sea.x < 0 ){
    sea.x = sea.width / 2;
  }

  drawSprites();
}