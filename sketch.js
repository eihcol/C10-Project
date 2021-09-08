var shipImg;
var ship;
var seaImg;
var sea;

function preload(){
 seaImg = loadImage("sea.png");
 shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale = 0.3;

  ship = createSprite(200,200,30,30);
  ship.addAnimation("movingship",shipImg);
  edges = createEdgeSprites();
  ship.scale = 0.2;
  
  

}

function draw() {
  background("blue");
  sea.velocityX = -5;

  if(sea.x < 400 ){
    sea.x = sea.width / 8;
  }

  drawSprites();
}