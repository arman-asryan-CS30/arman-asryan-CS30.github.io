// Drawing with Single Loops
// Arman
// Feb 24/2026

//Global variables
let objectX = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function movingObject() {
  circle(objectX,100,50)
  objectX += 10
  if (objectX > windowWidth + 30) {
    objectX = 0
  }
}

function circleLine(y,size) {
  //use this function to draw a line of circles
  //y -> number height at which to draw the line
  //size -> number    diameter of the circle

  let xStart = windowWidth * 0.1
  let xEnd = windowWidth * 0.9

  for(let x = xStart; x<xEnd; x += size){

    circle(x,y,size)
  }
}

function Gradiant() {
  let h = 2;
  let y = 0
  
  while (y < windowHeight){
    noStroke()
    let value = map(y,0,windowWidth,0,255)
    fill(value,200,60)
    rect(0,y,windowWidth,h)
    y += h
  }
}

function verticalCircles(x,size) {
  let yStart = 0;
  let yEnd = windowHeight;
  for(let  y = yStart; y < yEnd; y+= 2*size){
    triangle(mouseX,mouseY,x,y,)
  }
  for(let y = yStart; y < yEnd; y+= 2*size){
    let value = map(y,0,windowHeight,0,255)
    fill(value,100,100)
    fill(0)
    circle(x,y,size)
    
  }
  
}

function horizontalCircle(y,size) {
  let xStart = windowWidth * 0.1
  let xEnd = windowWidth * 0.9


  for(let x = xStart; x<xEnd; x += 2*size){
    let value = map(x,0,windowWidth,0,255)
    fill(value,200,50)
    fill(0)
    circle(x,y,size)
  }
}

function challange() {
  verticalCircles(0,52)
  verticalCircles(windowWidth,52)
  horizontalCircle(0,52)
  horizontalCircle(windowHeight,52)
}

function draw() {
  background(220);
  challange()
  //Gradiant()
  //circleLine(windowHeight*0.35,30)
  //circleLine(windowHeight/2,50)
  //circleLine(windowHeight*0.65,80)
  //movingObject()
}
