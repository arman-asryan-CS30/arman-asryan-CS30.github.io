// Text and Events
// Arman Asryan
// Feb 9,2026

// Global variable Section
let textShade = 255;
let textScale = 40
let bgcolor = "grey"

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function displayMouse(){
  //This function will report some system variables related to mouse onto the screen via text()
  //Good for mouseHELD events
  
  //try using mouseIsPressed  to change size
  // if(mouseIsPressed){
  //   textScale = int(random(10,110));
  // }
  
  textSize(textScale);
  fill(textShade);
  text(mouseX + "," + mouseY + "," + mouseIsPressed,
    mouseX,mouseY);
}

function mousePressed(){
  //this is a p5 function
  //automatically called exactly once per MousePressed(on down action)
  textShade = int(random(0,255))
}

function displayKeyboard(){
  //we'll use this functon to inspect some of p5's keyboard capabilities
  //KeyIsPressed -> is a keyboard button pressed?
  //key          -> last pressed key(non-coded)
  //keyCode      -> last pressed coded key
  if(keyIsPressed){
    //chech which key was pressed
    if(key === " "){
      bgcolor = color(random(255),random(255),random(255))
    }
  }

  textSize(30)
  textAlign(CENTER,CENTER)
  let t = keyIsPressed + "," + key + "," + keyCode
  text(t,width/2,height/2)
}

function keyPressed(){
  //called automatically ONCE per keydown event
  if(keyCode === 65){
    bgcolor = color(random(255),random(255),random(255))
  }
}

function draw() {
  //goal:keep draw() tidy!
  background(bgcolor);
  //displayMouse()
  displayKeyboard()
}
