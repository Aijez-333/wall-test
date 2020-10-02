var bllt1, bllt2, bllt3;
var thcknss1, thcknss2, thcknss3;
var wall1, wall2, wall3;
var road1, road2, road3;
var speed
var weight, weight, weight;


function setup() {
  createCanvas(1600,400);

  speed = random(223,321)

  weight = random(30,52)

  thcknss1 = random(22,83);
  thcknss2 = random(22,83);
  thcknss3 = random(22,83);

  road1 =createSprite(300,100,2000,90)
  road1.shapeColor = "black";

  road2 =createSprite(300,200,2000,90)
  road2.shapeColor = "black";

  road3 =createSprite(300,300,2000,90)
  road3.shapeColor = "black";


  bllt1 = createSprite(100, 100, 20, 10);
  //bllt1.velocityX = speed;
  bllt1.shapeColor="white";
  
  bllt2 = createSprite(100, 200, 20, 10);
  //bllt2.velocityX = speed;
  bllt2.shapeColor="white";
  
  bllt3 = createSprite(100, 300, 20, 10);
  //bllt3.velocityX = speed;
  bllt3.shapeColor="white";

  wall1 = createSprite(1200,100,thcknss1,60)
  wall1.shapeColor =(80,80,80);

  wall2 = createSprite(1200,200,thcknss2,60)
  wall2.shapeColor =(80,80,80);

  wall3 = createSprite(1200,300,thcknss3,60)
  wall3.shapeColor =(80,80,80);
 
}

function draw() {
  background(255,255,255);

  if(hasCollided(bllt1,wall1)){
  bllt1.velocityX = 0
  var damage = 0.5*speed*speed*weight/(thcknss1*thcknss1*thcknss1)

    if(damage>10){
      wall1.shapeColor = color(255,0,0)
    }

    if(damage<10){
      wall1.shapeColor = color(0,255,0)
    }

  }

  if(hasCollided(bllt2,wall2)){
    bllt2.velocityX = 0
    var damage = 0.5*speed*speed*weight/(thcknss2*thcknss2*thcknss2)
    
    if(damage>10){
      wall2.shapeColor = color(255,0,0)
    }
    
    if(damage<10){
      wall2.shapeColor = color(0,255,0)
    }
    
  }

  if(hasCollided(bllt3,wall3)){
    bllt3.velocityX = 0
    var damage = 0.5*speed*speed*weight/(thcknss3*thcknss3*thcknss3)
      
    if(damage>10){
     wall3.shapeColor = color(255,0,0)
    }
      
    if(damage<10){
     wall3.shapeColor = color(0,255,0)
    }
      
  }
  textSize(30)
  fill("red")
  text("Press SPACE to trigger and Press BACKSPACE to reload", 300,380)

  if(keyDown("BACKSPACE")){
    bllt1.x = 100;
    bllt2.x = 100;
    bllt3.x = 100;

  }

  if(keyDown("space")){
   bllt1.velocityX = speed;
   bllt2.velocityX = speed;
   bllt3.velocityX = speed;

  }

  drawSprites();
}

function isTouching(object1,object2){
if(object1.x-object2.x<object1.width/2+object2.width/2
&&object2.x-object1.x<object2.width/2+object1.width/2
&&object1.y-object2.y<object1.height/2+object2.height/2
&&object2.y-object1.y<object2.height/2+object1.height/2){
return true
}
  return false;
}


function bounceOff(object1,object2){
  if(object1.x-object2.x < object1.width/2+object2.width/2
  &&object2.x-object1.x < object1.width/2+object2.width/2){
    object1.velocityX = object1.velocityX *(-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if(object1.y-object2.y < object1.height/2+object2.height/2
  &&object2.y-object1.y < object1.height/2+object2.height/2){
    object1.velocityY = object1.velocityY *(-1);
    object2.velocityY = object2.velocityY *(-1); 
  }

}

function hasCollided(lbllt,lwall){
bulletRightEdge=lbllt.x+lbllt.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
  }
  return false;
}
