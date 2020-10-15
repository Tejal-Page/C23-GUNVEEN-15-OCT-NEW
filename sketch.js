//calling engine, world and bodies from matter.js and renaming them
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
//declaring the variable globally
var engine, world, box1, box2;
var ground;

function setup() {
  createCanvas(400,400);
  //creating engine
  engine=Engine.create();
  //attaching world to the engine
  world=engine.world;
  box1 = new Box(200, 100, 50, 50);
  box2 = new Box(220, 200, 50, 50);

  ground = new Ground(200, 390, 400, 20)
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  
  box1.display();
  box2.display();

  ground.display();
}