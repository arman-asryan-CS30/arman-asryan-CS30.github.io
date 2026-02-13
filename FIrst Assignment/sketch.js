// Interactive Story
// Arman Asryan
// Feb 11,2026

//---------------Global Variables----------------------

let currentBack = 0;

//---------------First Background--------------------------------
function drawClouds1(x,y){
  stroke(201, 201, 197)
  fill(201, 201, 197)
  circle(x,y-10,50)
  circle(x-40,y-10,50)
  circle(x-20,y+20,60)
  ellipse(x+20,y+y/25,70,40)
  ellipse(x-60,y+y/25,70,40)
}

function drawClouds2(x,y){
  stroke(201, 201, 197)
  fill(201, 201, 197)
  circle(x,y-10,50)
  circle(x-40,y-10,50)
  circle(x-40,y+10,60)
  circle(x,y+10,60)
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
  drawClouds1(windowWidth-100,windowHeight/4)
  drawClouds1(windowWidth-300,windowHeight/2)
  drawClouds1(windowWidth-550,windowHeight/3)
  drawClouds1(windowWidth-500,windowHeight-300)
  drawClouds1(windowWidth-760,windowHeight-450)
  
  drawClouds2(windowWidth/2,windowHeight/10)
  drawClouds2((windowWidth*3)/4,700)
}

//-----------------------Second Background---------------------------------


//----------------Character-------------------------------------------

function jet(x,y) {
  //Fuselage
  fill(0)
  stroke(0)
  ellipse(x,y,100,20)
  fill(0)
  stroke(0)

  //Wings and vertical stabilizer
  triangle(x,y,x-45,y-20,x-45,y+20)
  triangle(x+40,y,x,y-40,x,y+40)
}

//Bullets
function bullets(x,y) {
  fill(255,255,0)
  stroke(255,255,0)
  line(x,y,x+100,y)
}

//-------------------Actions----------------------------

//Background changing
function mousePressed() {
  if (mouseButton === "center") {
    currentBack = currentBack + 1;
  }

  if (currentBack > 4) {
    currentBack = 0
  }
}


//Shooting
function keyPressed() {
  if (key === " ") {      
    let bulletX = mouseX ;
    let bulletY = mouseY;
    bullets(bulletX,bulletY)    
  }
}




function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (currentBack === 0) {
    drawBackground1()
  }
  else{
    background(255)
  }
  
  jet(mouseX,mouseY)
}
