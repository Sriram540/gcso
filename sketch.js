var car,wall;
var speed,weight;





function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);



}

function draw() {
  background(255,255,255); 
  speed=random(55,90)
  weight=random()
  car =careateSprite(50,200,50,50)
wall=createSprite(1500,200,60,height/2)
car.velocityX=speed
  if(wall.x-car.x<(car.width+wall.width)){
    car.velocityX=0
    var deformation=0.5*width*speed*speed/22500;
    if(deformation>180){
      car.shapeColor=color(255,0,0)
      if(deformation>180 && deformation > 100){
        car.shapeColor=color(230,230,0)
      }
      if(deformation<100){
      car.shapeColor=color(0,255,0)
    }
  
    }
  
  } 
  drawSprites();
}