var rectangle1, rectangle2 ;


function setup() {
  createCanvas(1500,1000);
  rectangle1 = createSprite(400, 200, 50, 50);
  rectangle2 = createSprite(400,300,100,25);

  rectangle2.shapeColor = "yellow";
  rectangle1.shapeColor = "yellow";

  rectangle1.debug = true;
  rectangle2.debug = true;
}

function draw() {
  background(0,0,0);  

  rectangle2.x= mouseX ;
  rectangle2.y= mouseY ;


  if(rectangle2.x- rectangle1.x < rectangle1.width/2 + rectangle2.width/2 && 
     rectangle1.x- rectangle2.x < rectangle1.width/2 + rectangle2.width/2 &&
     rectangle1.y- rectangle2.y < rectangle1.height/2 + rectangle2.height/2 && 
     rectangle2.y- rectangle1.y < rectangle1.height/2 + rectangle2.height/2)   {

rectangle1.shapeColor = "red";
rectangle2.shapeColor = "red";
  }else{
    rectangle1.shapeColor = "yellow";
    rectangle2.shapeColor = "yellow";
  } 
  drawSprites();
}