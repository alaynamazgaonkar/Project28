
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var mango1,mango2,mango3,tree,rock,boy,ground,sling;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy    = new Boy(200,580,5,5)
	
	ground = new Ground(400,700,800,30)
	tree   = new Tree(600,500,10,10)
	rock = new Rock(200,200,30,30)
	sling = new Sling(rock.body,{x:160,y:600})
	mango1 = new Mango(600,450,5,5)
	mango2 = new Mango(700,400,5,5)
	mango3 = new Mango(500,400,5,5)
	mango4 = new Mango(600,350,5,5)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(163,224,233);
  
if(isTouching(rock,mango1)){
	Matter.Body.setStatic(mango1,false)}
	if(isTouching(rock,mango2)){
		Matter.Body.setStatic(mango2,false)}
		if(isTouching(rock,mango3)){
			Matter.Body.setStatic(mango3,false)}
			if(isTouching(rock,mango4)){
				Matter.Body.setStatic(mango4,false)}

  drawSprites();

   ground.display()
   tree.display()
   boy.display()
   rock.display()
   mango1.display()
   mango2.display()
   mango3.display()
   mango4.display()
   sling.display()
}

function mouseDragged(){
	Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})   }
   
   function mouseReleased(){
	   sling.fly()}

	   function isTouching(obj1,obj2){
		var distance=dist(obj1.x,obj1.y,obj2.x,obj2.y)
		if(distance<=obj2.r+obj1.r){
		return true	;	
		}
	   }


	   function isTouching2(obj1,obj2){
		if (obj1.x - obj2.x < obj2.width/2 +obj1.width/2
		&& obj2.x - obj1.x < obj2.width/2 + obj1.width/2
		&& obj1.y - obj2.y < obj2.height/2 + obj1.height/2
		&& obj2.y - obj1.y < obj2.height/2 + obj1.height/2){ 
		return true;}
		}


