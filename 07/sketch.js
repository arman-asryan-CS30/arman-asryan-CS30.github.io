// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let d = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;  y = height/2
  noFill()
  strokeWeight(5)
}

function draw() {
  background(220,50);
  x = lerp(x,mouseX,0.15)
  y = lerp(y,mouseY,0.15)
  
  
  let r = map(x,0,width,0,255)
  let g = map(y,0,height,0,255)
  let b = map(x+y,0,width+height,0,255)
  stroke(r,g,b)
  circle(x,y,d)
}

function mouseWheel(event) {
  if (event.delta < 0) {
    d += 5
  }
  else{
    d = max(10,d-5)
  }
}
