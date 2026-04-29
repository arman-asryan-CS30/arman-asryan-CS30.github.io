// Visual Recursion
// Arman Asryan
// April 29, 2026


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
}

function draw() {
  background(220);
  //centerCircle(width/2, height/2, 400)
  //circleFractal(width/2,height/2,400)
  luckySquare(width/2,height/2,500)
}


function centerCircle(x,y,d) {
  //recursively draw concentric circles

  //Base Case ... implicit
  if (d > 10) {
    //recursive case
    circle(x,y,d)
    centerCircle(x,y,d*0.95)
  }

  //if the recursive case is skipped,
  //we unravrl onr level (base case)
}

function circleFractal(x,y,d) {
  noFill()
  //base case
  if (d > 2) {
    circle(x,y,d)
    circleFractal(x - d/2,y,d/2)
    circleFractal(x + d/2,y,d/2)
    circleFractal(x,y+d/2,d/2)
  }
}

function luckySquare(x,y,l) {
  let r = map(x,0,width,0,255)
  let g = map(y,0,height,0,255)
  let b = map(x,0,width,255,0)
  stroke(r,g,b)
  noFill()

  if(dist(x,y,mouseX,mouseY) <= l/2) strokeWeight(5)
  else strokeWeight(1)

  push();
  translate(x,y)
  rotate(radians(frameCount))
  square(0,0,l)
  pop();
  //base case
  if (l>5) {
    square(x,y,l)
    luckySquare(x - l/2,y - l/2, l*0.45)
    luckySquare(x + l/2,y - l/2, l*0.45)
    luckySquare(x - l/2,y + l/2, l*0.45)
    luckySquare(x + l/2,y + l/2, l*0.45)
  }
}