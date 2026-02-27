// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectX = 0;
let rectY = 0;
let circleX = 0;
let circleY = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;  y = height/2
  noFill()
  strokeWeight(5)
}

function draw() {
  background(220,50);
  rectX = lerp(rectX,mouseX,0.15)
  rectY = lerp(rectY,mouseY,0.15)

  let r = map(rectX,0,width,0,255)
  let g = map(rectY,0,height,0,255)
  let b = map(rectX+rectY,0,width+height,0,255)
  stroke(r,g,b)
  
  rect(rectX,rectY,50,50)
  

  rect(rectX,rectY,50,50)

  circleX = lerp(circleX,mouseX,0.05)
  circleY = lerp(circleY,mouseY,0.05)

  
  circle(circleX,circleY,50)
  

}
