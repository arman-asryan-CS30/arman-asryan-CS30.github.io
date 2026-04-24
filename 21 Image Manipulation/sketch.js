// Arman,
//April 22 /2026

//Working with Images
//translation b/w 2D and 1D indicies
//Part 2: using video

let myImage;
let myVideo;

function preload() {
  //called BEFORE setup. Wont conclude
  //until all loads are complete
  myImage = loadImage("./assets/aviator.png")
}

function setup() {
  createCanvasmyImage.width,myImage.height);
  createCanvas(640,480);
 myVideo = createCapture(VIDEO)
  pixelDensity(1)
}

function draw() {
  background(220);
  //image(myImage,0,0)
  image(myVideo,0,0);
  //access and modify pixels on the canvas
  loadPixels(); //dumps the data from canvas into array
  background(0)
  // for(let i = 0; i<500; i+=4){
  //   pixels[i] =255
  // }
  // pixels[0] = 255;

  //boost()
  //greyscale()
  //updatePixels()
  textImage()
}

function textImage() {
  fill(255)
  let scaleAmount = 5;
  textSize(scaleAmount)

  for (let x = 0; x < width; x+= scaleAmount) {
    for (let y = 0; y < height; y+=scaleAmount) {
      let avg = getAvg(x,y)
      if(avg>140) text("👹",x,y)
      if(avg>170) text("🤢",x,y)
      if(avg>110) text("🤖",x,y)
      if(avg>90) text(".",x,y)
    }
    
  }
}

function setPixelOneD(pos,r,g,b) {
  //pos -> 1D location of tje pixel's red component.
  //r,g,b -> new color values (0-255) for the pixel

  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}

function getAvg(x,y) {
  let index = ((y*width+x))*4
  let r = pixels[index]
  let g = pixels[index+1]
  let b = pixels[index+2]
  return (r+g+b) / 3
}

function greyscale() {
  //use the average intenisty of each pixel
  // to represent it as a shade of grey.

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let avg = getAvg(x,y);
      setPixel(x,y,avg,avg,avg)
    }
  }
}

function setPixel(x,y,r,g,b) {
  //x,y is the pixels location
  //r,g,b = color values
  let index = ((y*width) + x)*4;
  setPixelOneD(index,r,g,b);
}

function boost() {
  //brightening filter
  let boostAmount = map(mouseX,0,width,-100,100);
  for (let i = 0; i < pixels.length; i+=4) {
    let r = pixels[i] + boostAmount;
    let g = pixels[i+1] + boostAmount;
    let b = pixels[i+2] + boostAmount;
    setPixelOneD(i,r,g,b);
  }
}


