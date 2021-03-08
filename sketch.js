const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine ,world;
var ground,ground2,ground3;
var b1;

function preload() {

}

function setup(){
    var canvas = createCanvas(1500,500);
    engine = Engine.create();
    world = engine.world;



    ground = new Ground(750,490,1500,5);
    ground2 = new Ground(450,300,300,5);
    ground3 = new Ground(1000,225,300,5);

    b1 = new Bottle(225,325,100,100);
}

function draw(){
    background("skyblue");
    Engine.update(engine);
    ground.display();
    ground2.display();
    ground3.display();
    b1.display();
    drawSprites();
}