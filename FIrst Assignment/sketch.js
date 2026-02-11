// Interactive Story
// Arman Asryan
// Feb 11,2026

//---------------Global Variables----------------------


function drawClouds(x,y){
  stroke(201, 201, 197)
  fill(201, 201, 197)
  circle(x,y,50)
  circle(x-40,y,50)
  circle(x-20,y+30,60)
  ellipse(x+20,y+y/25,70,40)
  ellipse(x-60,y+y/25,70,40)
}

function drawBackground1(){
  background(111, 197, 222)

  //Sun
  fill(255, 235, 26)
  stroke(255, 235, 26)
  circle(windowWidth-windowWidth/20,20,100)
  
  //Clouds
  let cloudX = windowWidth;
  let cloudY = random(windowHeight);
  console.log(cloudY)
  drawClouds(50,cloudY)
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  drawBackground1()
}
