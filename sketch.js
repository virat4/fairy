var fairy, fairyImg, fairyImg2, fairyImg3;
var star, starImg;
var backImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
   //preload the images here
fairyImg = loadImage("images/fairy.png","images/fairy1.png");
starImg = loadImage("images/star.png");
backImg = loadImage("images/starnight.png");
}

function setup() {
  createCanvas(800, 750);
  fairy = createSprite(130,520);
  fairy.addAnimation("fairyFlying",fairyImg);
  fairy.scale = 0.2;
  star = createSprite(650,30);
  star.addImage(starImg);
  star.scale = 0.3;
  engine = Engine.create();
  world = engine.world;
  starBody = Bodies.circle(650,30,5,{restitution:0.5,isStatic:true});
  World.add(world,starBody);
  Engine.run(engine);
}


function draw() {
  background(backImg);
  star.x = starBody.position.x;
  star.y = starBody.position.y;

  if(star.y>470 && starBody.position.y>470){
    Matter.Body.setStatic(starBody,true);
  }
  drawSprites();
}


function keyPressed(){
  if(keyCode === LEFT_ARROW){
    fairy.x = fairy.x -20;
  }
  if(keyCode === RIGHT_ARROW){
    fairy.x = fairy.x +20;
  }
  if(keyCode === DOWN_ARROW){
    Matter.Body.setStatic(starBody,false);
  }


}
