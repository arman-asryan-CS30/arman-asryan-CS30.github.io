//Basics of Coordinates Systems
//
//In Python we wrote "run-to-complition"
// (start at top, end at the bottom)
//
//In p5.js, we write "interactive"
// setup() -> runs once, at the start
// draw() -> runs over and over (after setup)
//           targetung 60 times per second  
//
// screen is updated at bottom of draw

//----------Global Variable Section------------
//We can DECLARE variable here
//we can INITIALIZE variales with simple data types (num,strings)
//  -> dont have access to system variables
let circleX = 0
let height = 400
let width = 500

function setup() {
  //aim to keep this TIDY
  createCanvas(500, 400);
}

function draw() {
  background(0); //wipes the screen 
  //drawCircle()

  movingCircle()
  circleX += 10
  if(circleX === width){
    circleX=0
  }
}

function  drawCircle(){
  circle(0,0,50)
  circle(width,0,50)
  circle(width,height,50)
  circle(0,height,50)
  circle(width/2,height/2,50)
}

function movingCircle(){
    circle(circleX,height/2+40,50)
  
}

// function drawTwoCircles(){
//     //     x   y  dia
//     fill(200,100,20)
//     stroke("#AAFF30")
//     circle(circleX,100,50)

//     //Second
//     circle(width/2,height/2,200)
// }
