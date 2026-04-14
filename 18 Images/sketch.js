//Working with Images
//Arman Asryan
//Apr 14/26
//How to load images


let lionL, lionR;
let dir = "left"
let pinImages = [];
let current = 0; //pinwheel curr index

async function loadAssets() {
  //load lions
  lionL = loadImage("./assets/lion-left.png");
  lionR = loadImage("./assets/lion-right.png");

  //pinwheel images
  for (let i = 0; i <= 8; i++) {
    pinImages.push(loadImage("./assets/pin-0"+i+".png"))
  }
  
}

async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssets();
  imageMode(CENTER);
  noCursor()
}

function lion(){
//update state
if (movedX<0) dir = "left"
else if(movedX >0) dir ="right"
if (dir === "left") {
  image(lionL, mouseX,mouseY,
    lionL.width/2, lionL.height/2
  )
}else{
  image(lionR, mouseX,mouseY,
    lionL.width/2, lionL.height/2
  )
}
}

function draw() {
  background(220);
  lion()
  pinWheel()
}

function pinWheel() {
  image(pinImages[current],width/2,height/2)
  current++
  if (current > pinImages.length - 1) {
    current = 0
  }
}
