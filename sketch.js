var song;
function preload(){
 
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
} 

function draw() {

  background(154, 194, 201);
 
  for(i=0;i<windowWidth;i+=3){
    
    line(i,0,mouseX,mouseY);
    }
  
  for(j=0;j<windowWidth;j+=3){
    
    line(j,windowHeight,mouseX,mouseY);
  }
 
  for(a=0;a<windowHeight;a+=3){
   
    line(0,a,mouseX,mouseY);
 }
  for(a=0;a<windowHeight;a+=3){
   
    line(windowWidth,a,mouseX,mouseY);
   
  }
    
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


