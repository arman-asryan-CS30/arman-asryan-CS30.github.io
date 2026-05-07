// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myImage;

function preload() {
  //myImage = loadImage("./assets/chip.jpg")
  //myImage = loadImage("./assets/race.jpg")
  //myImage = loadImage("./assets/nuit.jpg")
  myImage = loadImage("./assets/hand.jpg")
}

function setup() {
  createCanvas(myImage.width, myImage.height);
  pixelDensity(1)
}

function draw() {
  background(220);
  //image(myImage,0,0)
  image(myImage,0,0)
  loadPixels()

  //Majority Color
  // for (let x = 0; x < width; x++) {
  //   for (let y = 0; y < height; y++) {
  //     majorityColor(x,y)
  //   }
  // }
  
  //No Green
  // for (let x = width/2; x < width; x++) {
  //   for (let y = 0; y < height; y++) {
  //     noGreen(x,y)
  //   }
  // }
  

  //Average color
  // for (let x = 0; x < width; x++) {
  //   for (let y = 0; y < height; y++) {
  //     getAvg(x,y)
  //   }
  // }

  
  
  //Horzontal Mirroring
  // for (let x = 0; x < width/2; x++){
  //   for (let y = 0; y < height; y++) {
  //    mirror(x,y)
  //   } 
  // }
  
  updatePixels()
}


//Majority color
function majorityColor(x,y) {
  let index = ((y*width+x))*4
  let r = pixels[index]
  let g = pixels[index+1]
  let b = pixels[index+2]

  if (r>g && r>b) {
    r=255
    g=0
    b=0
  }

  if (g>r && g>b) {
    r=0
    g=255
    b=0
  }

  if (b>r && b>g) {
    r=0
    g=0
    b=255
  }

  setPixel(x,y,r,g,b)
  
}

//No Green Right Side
function noGreen(x,y) {
  let index = ((y*width+x))*4
  let r = pixels[index]
  let g = 0;
  let b = pixels[index+2]

  setPixel(x,y,r,g,b)
  
}

//Five-Color Posterize
function getAvg(x,y) {
  let index = ((y*width+x))*4
  let r = pixels[index]
  let g = pixels[index+1]
  let b = pixels[index+2]
  let avg = (r+g+b)/3

  if(avg >= 205 && avg <=255){
    r =170;
    g=230
    b=220
  }
  else if(avg >= 155 && avg<205){
    r =105
    g = 150
    b = 210
  }
  else if(avg >= 105 && avg<155){
    r =120
    g = 180
    b = 60
  }
  else if(avg >= 55 && avg<105){
    r =130
    g = 30
    b = 130
  }else{
    r =90
    g = 10
    b = 50
  }

  setPixel(x,y,r,g,b)
}


//Horizontal Mirroring
function mirror(x,y) {
  let mirrorX = width - x
  let mirrorIndex = (y*width+mirrorX)*4

  let r = pixels[mirrorIndex]
  let g = pixels[mirrorIndex+1]
  let b = pixels[mirrorIndex+2]
  
  setPixel(x,y,r,g,b)

  
}

function setPixelOneD(pos,r,g,b) {
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}

function setPixel(x,y,r,g,b) {
  let index = ((y*width) + x)*4;
  setPixelOneD(index,r,g,b);
}
