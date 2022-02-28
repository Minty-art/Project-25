var wall1, wall2, wall3
var paperObject
var garImage
var ball, ground, groundSprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	garImage = loadImage("dustbin.png")
}

function setup() {
	createCanvas(800, 700);
	garcan = createSprite(500, 570, 20, 20)
	garcan.addImage(garImage)
	garcan.scale = 0.5
	
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground = new Ground(width/2, 650, width, 20);

	paperObject = new Paper(10, 0);
	
	wall1 = new dustbin(430, 560, 10, 170);
	wall2 = new dustbin(570,560, 10, 170);
	wall3 = new dustbin(500, 640, 150, 10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  drawSprites();
  Engine.update(engine);
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  paperObject.display();
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x: 0.050, y:-0.060})
	}
}