var x = 1920;
var y = 1080;


function setup() {
  createCanvas(x,y);
  frameRate();
}

function draw() {
  background(154, 194, 201);
  for(i=0;i<x;i+=10){
   line(i,0,mouseX,mouseY);
    
  }
  
  for(j=0;j<x;j+=2){
    line(j,y,mouseX,mouseY);
    
  }
  for(a=0;a<x;a+=10){
    line(0,a,mouseX,mouseY);
    
  }
  for(a=0;a<x;a+=10){
    line(x,a,mouseX,mouseY);
    
  }
    
}