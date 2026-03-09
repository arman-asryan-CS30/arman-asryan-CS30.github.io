// Nested Loops
// Arman Asryan
// March 6 / 2026

let bubbleSize = 20;
let bubbles = []
let noiseTime = 5 ; let noiseSpeed=0.01
function setup() {
  createCanvas(windowWidth, windowHeight);
  populateArray()
}

function populateArray() {
  for (let x = 0; x <= width; x += bubbleSize+20) {
    for (let y = 0; y < height; y += bubbleSize+20) {
      //circle(x,y,10)
      let wiggleX = noise(noiseTime)
      wiggleX = map(wiggleX,0,1,x-50,x+50)

      let wiggleY = noise(noiseTime)
      wiggleY = map(wiggleY,0,1,y-50,y+50)
      let b = {x: wiggleX, y:wiggleY}
      bubbles.push(b)
    }
  }
}

function eDist(x1,y1,x2,y2) {
  //calculate the straight line distance
  let a = x1-x2;
  let b = y1-y2;
  let c = sqrt(pow(a,2) + pow(b,2))
  return round(c) //keep 1 dec. place
}

function drawBubble() {

  for(let i = 0; i<bubbles.length; i++){
    let b = bubbles[i]
    circle(b.x,b.y,bubbleSize)
    //textAlign(CENTER,CENTER)
    let d = eDist(b.x,b.y,mouseX,mouseY)
    //text(d,b.x,b.y)
    //where in the array is b??? no idea
    //check if we are overtop of the bubble and then delete it if so
    if (d < bubbleSize/2) {
      //to delete from array, use , .splice()
      bubbles.splice(i,1)
    }
  }
}

function draw() {
  background(255);
  //populateArray()
  drawBubble()
  noiseTime += noiseSpeed
}
