// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let w = 5
let noiseTime = 5; let noiseSpeed = 0.02

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0)
 
}

function keyPressed() {
  if (key === "ArrowLeft") {
    w -= 1
  }
  if (key === "ArrowRight") {
    w += 1
  }
}

function generateTerrain() {


  
  for (let x = 0; x < width; x += w) {
    let h = noise(noiseTime)
    h = map(h,0,1,0,height)
    rect(x,height,w,-h)
    noiseTime += noiseSpeed
  }
  noiseTime = 5.0

}

function draw() {
  background(220);
  randomSeed(100);
  generateTerrain()
}
