var sun, p1, p2,p3,p4,p5,p6,p7,p8;

function setup(){
  createCanvas(800,400);

  sun = createSprite(100,212,75,75);
  p1 = createSprite(220,212,50,50);
  p1.scale = 0.5;
  p2 = createSprite(320,212,50,50);
  p2.scale = 0.5;
  p3 = createSprite(420,212,50,50);
  p3.scale = 0.5;
  p4 = createSprite(510,212,50,50);
  p4.scale = 0.5;
  p5 = createSprite(595,212,50,50);
  p5.scale = 0.5;
  p6 = createSprite(650,212,50,50);
  p6.scale = 0.5;
  p7 = createSprite(718,212,50,50);
  p7.scale = 0.5;
  p8 =createSprite(780,212,50,50);
  p8.scale = 0.5;



  sun.shapeColor = "yellow";
  p1.shapeColor = "red";
  p2.shapeColor = "brown";
  p3.shapeColor = "green";
  p4.shapeColor = "purple";
  p5.shapeColor = "voilet";
  p6.shapeColor = "blue";
  p7.shapeColor = "grey";
  p8.shapeColor = "pink";

  sun.setCollider("circle",0,0,50);
}

function draw() {
  background(5); 
  
  if(World.frameCount%60 === 0){
    sun.width = sun.width + 45;
    sun.height = sun.height + 25;
  }

  if(collide(p1,sun)){
    p1.destroy();
  }

  if(collide(p2,sun)){
    p2.destroy();
  }

  if(collide(p3,sun)){
    p3.destroy();
  }

  if(collide(p4,sun)){
    p4.destroy();
  }

  if(collide(p5,sun)){
    p5.destroy();
  }

  if(collide(p6,sun)){
    p6.destroy();
  }

  if(collide(p7,sun)){
    p7.destroy();
  }

  if(collide(p8,sun)){
    p8.destroy();
  }
 



  if(sun.width > 1000){
    back.shapeColor = "yellow";
  }

 
  drawSprites();
}


