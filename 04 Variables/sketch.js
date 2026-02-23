// State Variables and Real Time
// Mr. Scott
// Feb 23, 2026

// Global Variables
let shapeState = 0; //0- Circle    1- Square
                    //2- Triangle  3- Starbust

let startTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis()
}

function draw() {
  background(220);
  drawShape();
}

function manageTime() {
  //this function will reset our timer
  // (and update shapeState) once every 2 seconds

  let elapsedTime = millis() - startTime
  if (elapsedTime > 1000) {
    updateState()
    startTime = millis()
  }
}

function keyPressed() {
  updateState()
}

function updateState() {
  shapeState++
  if (shapeState > 3) {
    shapeState = 0
  }
}

function drawShape(){
  // function inspects the shapeState variable
  // and draws the appropriate shape on the canvas
  switch(shapeState){
    case 0:
      circle(width/2, height/2, 150);
      break;
    case 1:
      square(width/2, height/2, 150);
      break;
    case 2:
      let x = width/2;    let y = height/2;
      triangle(x-50, y+50, x+50, y+50, x, y-25);
  }
}