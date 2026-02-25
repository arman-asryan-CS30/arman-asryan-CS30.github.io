// Interactive Story
// Arman Asryan
// Feb 11,2026

//---------------Global Variables----------------------

let currentBack = 1;
let bombX;
let bombY;
let bombActive = false;

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
  drawClouds2((windowWidth*3)/4,windowHeight-(windowHeight/4))
}

//-----------------------Second Background---------------------------------
function drawBackground2() {
   background(111, 197, 222)

  //Sun
  fill(255, 235, 26)
  stroke(255, 235, 26)
  circle(windowWidth-windowWidth/20,20,100)
  
  //Buildings
  fill(0)
  stroke(0)
  //First building with the windows
  rect(windowWidth/8,windowHeight-(windowHeight/3),windowWidth/5,windowHeight/3)
  fill(255,255,0)
  rect(windowWidth/7,windowHeight-(windowHeight/3.2),windowWidth/14,windowWidth/14)
  rect(windowWidth/4.3,windowHeight-(windowHeight/3.2),windowWidth/14,windowWidth/14)
  rect(windowWidth/7,windowHeight-(windowHeight/4.5),windowWidth/14,windowWidth/14)
  rect(windowWidth/4.3,windowHeight-(windowHeight/4.5),windowWidth/14,windowWidth/14)
  rect(windowWidth/7,windowHeight-(windowHeight/7.8),windowWidth/14,windowWidth/14)
  rect(windowWidth/4.3,windowHeight-(windowHeight/7.8),windowWidth/14,windowWidth/14)

  //Second building
  fill(0)
  rect(windowWidth/2.5,windowHeight-(windowHeight/2),windowWidth/5,windowHeight/2)
  fill(255,255,0)
  rect(windowWidth/2.35,windowHeight-(windowHeight/2.1),windowWidth/19,windowWidth/19)
  rect(windowWidth/1.93,windowHeight-(windowHeight/2.1),windowWidth/19,windowWidth/19)
  rect(windowWidth/2.35,windowHeight-(windowHeight/2.5),windowWidth/19,windowWidth/19)
  rect(windowWidth/1.93,windowHeight-(windowHeight/2.5),windowWidth/19,windowWidth/19)
  rect(windowWidth/2.35,windowHeight-(windowHeight/3.1),windowWidth/19,windowWidth/19)
  rect(windowWidth/1.93,windowHeight-(windowHeight/3.1),windowWidth/19,windowWidth/19)
  rect(windowWidth/2.35,windowHeight-(windowHeight/4.1),windowWidth/19,windowWidth/19)
  rect(windowWidth/1.93,windowHeight-(windowHeight/4.1),windowWidth/19,windowWidth/19)
  rect(windowWidth/2.35,windowHeight-(windowHeight/5.9),windowWidth/19,windowWidth/19)
  rect(windowWidth/1.93,windowHeight-(windowHeight/5.9),windowWidth/19,windowWidth/19)

  //
  fill(0)
  rect(windowWidth-(windowWidth/3),windowHeight-(windowHeight/2.5),windowWidth/3.5,windowHeight/2.5)
  fill(255,255,0)
  rect(windowWidth-(windowWidth/3.2),windowHeight-(windowHeight/2.7),windowWidth/16,windowWidth/16)
  rect(windowWidth-(windowWidth/4.5),windowHeight-(windowHeight/2.7),windowWidth/16,windowWidth/16)
  rect(windowWidth-(windowWidth/7.5),windowHeight-(windowHeight/2.7),windowWidth/16,windowWidth/16)
  rect(windowWidth-(windowWidth/3.2),windowHeight-(windowHeight/4),windowWidth/16,windowWidth/16)
  rect(windowWidth-(windowWidth/4.5),windowHeight-(windowHeight/4),windowWidth/16,windowWidth/16)
  rect(windowWidth-(windowWidth/7.5),windowHeight-(windowHeight/4),windowWidth/16,windowWidth/16)
  rect(windowWidth-(windowWidth/3.2),windowHeight-(windowHeight/7),windowWidth/16,windowWidth/16)
  rect(windowWidth-(windowWidth/4.5),windowHeight-(windowHeight/7),windowWidth/16,windowWidth/16)
  rect(windowWidth-(windowWidth/7.5),windowHeight-(windowHeight/7),windowWidth/16,windowWidth/16)
}

//----------------------------------------------Background 3---------------------------------
function drawBackground3() {
  background(0,4,53)

  //Stars
  noStroke()
  circle(50,50,10)
  circle(70,(windowHeight/2)-50,10)
  circle(windowWidth/2,50,10)
  fill("yellow")
  circle(windowWidth/2,(windowHeight*5)/6,10)
  crossStar(20,110,5,20)
  crossStar(windowWidth-40,110,5,20)
  fill("blue")
  crossStar(windowWidth-90,windowHeight-70,10,50)
  fill("red")
  crossStar(100,windowHeight-70,10,50)

  fill(255)
  crossStar(windowWidth-200,(windowHeight/2)+40,10,50)
  circle(90,60,10)
  crossStar(500,500,5,20)
  fill("red")
  crossStar(200,200,5,20)
  fill("lightblue")
  crossStar(80,500,5,40)
  fill(255,255,0)
  crossStar(300,300,8,30)
  fill(255)
  crossStar(200,390,8,30)
  //Planets
  fill(196,164,132)
  circle((windowWidth*2)/3,windowHeight/4,250)
  fill(0,4,53)
  circle((windowWidth*2)/3,windowHeight/4,200)
  fill(255,255,0)
  circle((windowWidth*2)/3,windowHeight/4,150)
  
 
}

function crossStar(x,y,w,h) {
  ellipse(x,y,w,h)
  ellipse(x,y,h,w)
}


//------------------------------------------Backgrond 4---------------------------------------------------------------------------

function drawBackground4() {
  background(255, 170, 1)
  noStroke()
  fill(255, 162, 2)
  circle(windowWidth/2,(windowHeight/2)-250,250)
  fill(254, 137, 2)
  circle(windowWidth/2,(windowHeight/2)-250,200)
  fill(99, 50, 13)
  triangle(0,(windowHeight*8)/9,0,windowHeight,windowWidth/4,500)
  fill(150, 75, 0)
  triangle(windowWidth/4,500,-5,windowHeight,windowWidth/2,windowHeight)
  fill(120, 80, 50)
  triangle(windowWidth-300,400,windowWidth/3,windowHeight,windowWidth/2,windowHeight)
  fill(150, 100, 0)
  triangle(windowWidth-300,400,windowWidth,windowHeight,windowWidth/2-10,windowHeight)
  fill(110, 50, 18)
  triangle(windowWidth-0,550,windowWidth,windowHeight,windowWidth-140,700)
}

//----------------Characters-------------------------------------------

function jet(x,y) {
  //Fuselage
  fill(0)
  stroke(0)
  if (currentBack === 0){
    fill(255)
    stroke(255)
  }
  
  ellipse(x,y,100,20)
  fill(0)
  if(currentBack===0){
    fill(255)
    stroke(255)
  }

  stroke(0)
  if (currentBack === 0) {
    stroke(255)
  }

  //Wings and vertical stabilizer
  triangle(x,y,x-45,y-20,x-45,y+20)
  triangle(x+40,y,x,y-40,x,y+40)
}

function bomb(x,y) {
  noStroke()
  fill(0)    
  ellipse(x,y,80,100)
  triangle(x,y-30,x-50,y-70,x+50,y-70)
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

//Dropping a bomb
function keyPressed() {
  if (key === "b" && !bombActive) {
    //Take plane's coordinates as starting point
    bombX = mouseX; 
    bombY = mouseY;
    bombActive = true;
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (currentBack === 0) {
    drawBackground1()
  }
  else if (currentBack === 1) {
    drawBackground3()
  }
  else if (currentBack === 2) {
    drawBackground2()
  }
  else{
    drawBackground4()
  }
  
  jet(mouseX,mouseY)
  
  if (bombActive) {
    bomb(bombX,bombY)
    bombY = bombY + 10
  }
  if (bombY > windowHeight) {
    bombActive = false;
  }
}
