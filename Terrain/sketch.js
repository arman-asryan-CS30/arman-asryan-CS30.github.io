// Perlin Noise Project
// Arman Asryan
// March 5,2026


//Global Variables
let w = 5
let noiseTime = 5; let noiseSpeed = 0.01
let numberRect;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0)
}

//Changing the width of the rectangles
//through keyboard interactions
function keyPressed() {
  if (key === "ArrowLeft") {
    w -= 1
  }
  if (key === "ArrowRight") {
    w += 1
  }
}

function drawFlag(x,y) {
  line(x,y,x,y-50) //Coordinates of the highest peak
  fill("green")
  triangle(x,y-50,x+20,y-40,x,y-30)
  fill(0)
}

function generateTerrain() {
  //will be used for generating height
  let time = noiseTime
  let heightSum = 0;
  
  //Used to determine highest peak
  let yHighest = 0;
  let xHighest = 0
  fill(0)
  for (let x = 0; x < width; x += w) {
    let h = noise(time)
    h = map(h,0,1,0,height)
    rect(x,height,w,-h)
    time += noiseSpeed
    
    //Check if the current peak is higher than
    //the previous one 
    //final value of highest will be the highest peak
    if (h>yHighest) {
      yHighest = h
      xHighest = x
    }

    //Calculate the average height
    heightSum += h
    
    
    
  }
  drawFlag(xHighest,height- yHighest)

  //Panning
  noiseTime -= 0.01

  //Calculate number of Rectiangles
  numberRect = width/w

  //Average height visual
  fill("yellow")
  rect(0,height-(heightSum/numberRect),width,30)
//                         ^
//                         |
//            Calculates the average height
}

function draw() {
  background(220);
  generateTerrain()
}
