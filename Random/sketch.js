// Random vs noise 
// Arman
// Feb 27, 2026
//

//Global VAriable

let d1,d2;
let minSize = 5; let maxSize = 200
let x1,x2,y1,y2;

let noiseTime = 5, noiseSpeed = 0.02;

let ySpeedMin = -5; ySpeedMax = 5;
let yTime = 5

function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width * 0.3; y1 = height*0.5;
  x2 = width*0.7; y2 = height*0.5
  
}

function noiseCircle() {
  //draw a fixed circle with randomly 
  //changing diameter
  fill(200,150,50)
  d2 = noise(noiseTime) //yields 0 - 1
  d2 = map(d2,0,1,maxSize,minSize)
  noiseTime  += noiseSpeed
  circle(x2,y2,d2)
}

function stars() {
  //use random() to generate 100 stars
  fill(255)
  for (let i = 0; i < 100; i++) {
    let x = random(0, width)
    let y = random(0, height)
    circle(x, y, 3)

  }

}

function randomCircle() {
  //draw a fixed circle with random() ly
  //changing diamter
  fill(120,)
  d1 = random(minSize,maxSize)
  circle(x1,y1,d1)
}

function draw() {
  background(0);
  //randomCircle()
  noiseCircle()
  // randomSeed(703)
  // stars()
}
