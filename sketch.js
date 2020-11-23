const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var umbrella,thunder;
var engine, world;
var t1,t2,t3,t4;
var drops = []
var maxDrops = 100
var  r;
var frames = 0;

function preload(){
    t1 = loadImage("images/1.png")
    t2 = loadImage("images/2.png")
    t3 = loadImage("images/3.png")
    t4 = loadImage("images/4.png")
}

function setup(){
    createCanvas(400,700)
    engine = Engine.create();
    world = engine.world;
   umbrella  = new Umbrella(200,500)

   if(frameCount%100===0){
   for(var i = 0; i<maxDrops;i++){
       drops.push(new Drops(random(0,400),random(0,400)))
   }
   }
    
}

function draw(){
    background("black")
    Engine.update(engine);

    r = Math.round(random(1,4))
    if(frameCount%120===0){
  frames=frameCount;
  thunder = createSprite(random(10,370),random(10,30),10,10)
  switch(r){
      case 1:thunder.addImage(t1);
      break;
      case 2:thunder.addImage(t2);
      break;
      case 3:thunder.addImage(t3);
      break;
      case 4:thunder.addImage(t4);
      break;
      default:break
  }
  thunder.scale = random(0.3,0.6)
    }
    if(frames+10===frameCount && thunder){
        thunder.destroy();
    }
umbrella.display()

for(var i = 0; i<maxDrops; i++){
    drops[i].showDrop()
    drops[i].update()
}
    drawSprites()
}   

