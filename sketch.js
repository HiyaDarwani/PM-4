
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyimg;

function preload()
{
	boyimg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,40);
	greentree = new Tree(580, 480, 450, 450)
	//boy = new Boy(185, 630, 200, 240)
	stone = new Stone(90, 600, 30, 30)
	chain = new Chain(stone.body, {x:95, y:550})
	mango1 = new Mango(650, 350, 50, 50)
	mango2 = new Mango(600, 450, 50, 50)
	mango3 = new Mango(500, 450, 50, 50)
	mango4 = new Mango(550, 350, 50, 50)
	mango5 = new Mango(700, 450, 50, 50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0, 237, 255);
  image(boyimg, 50, 500, 200, 240)

  drawSprites();
 ground.display();
 greentree.display();
 //boy.display();
 stone.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();

 detectCollision(stone, mango1);
 detectCollision(stone, mango2);
 detectCollision(stone, mango3);
 detectCollision(stone, mango4);
 detectCollision(stone, mango5);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}

function detectCollision(Lstone, lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition = Lstone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<=lmango.r+Lstone){
	Matter.Body.setStatic(lmango.body,false);
}
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:235, y:420})
		launcherObject.attach(stone.body)
	}
}