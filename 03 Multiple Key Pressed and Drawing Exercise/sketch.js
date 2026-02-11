// Multiple Keypress Detection 
//------ Drawing Practice -------------------
// Arman Asryan
// Feb 10,2026

let diameter = 50;
let characterX = 0;
let characterY = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function controls(){
  if(keyIsPressed){
    if(keyCode === 37){
      characterX = characterX - 10
    }
    else if(keyCode === 39){
      characterX = characterX + 10
    }
    else if(keyCode === 38){
      characterY = characterY - 10
    }
    else if(keyCode === 40){
      characterY = characterY + 10
    }
  }
  
}

function drawCharacter(x,y){
  fill(170, 255, 170)
  fill(170, 255, 170)
  circle(x,y,diameter)
  stroke(170, 255, 170)
  rect(x-diameter/2,y,diameter,diameter/2)
  
  //Eyes
  fill(0)
  circle(x-diameter/5,y,diameter/10)
  circle(x+diameter/5,y,diameter/10)

  //Mouth
  fill(0)
  stroke(0)
  line(x-diameter/6,y+diameter/5, x+diameter/6, y+diameter/5)

  //legs
  fill(170, 255, 170)
  stroke(170, 255, 170)
  rect(x-diameter/2, y + diameter/3,diameter/6,diameter/2)
  rect(x+ diameter/3, y + diameter/3,diameter/6,diameter/2)
}

// function checkMulti(){
//   //a function to demonstrate how we can check 
//   // if the multiple keyboard buttons are pressed
//   // at once
  
//   //check for multiple keypresses (3 simult.)
//   let a = keyIsDown(65);//a
//   let b = keyIsDown(66);//b
//   let c = keyIsDown(67);//c

//   let str = "a: " + a + " b: " + b + " c: " + c;
//   textSize(40)
//   text(str, 100, 300)


// }

function draw() {
  background(0);
  controls()
  drawCharacter(characterX,characterY)
  //rcle(windowWidth/2,windowHeight/2,50)
}
