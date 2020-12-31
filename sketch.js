const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var myEngine,myWorld;
var stone;
var chain;

function setup(){
  var canvas=createCanvas(600,600);
  myEngine=Engine.create();
  myWorld=myEngine.world;

  stone = new Stone(200,300,60);

  chain=new Chain(stone.body,{x:50,y:100});
}
function draw(){
  background("skyblue");
  Engine.update(myEngine);
  stone.display();
  chain.display();
  
}