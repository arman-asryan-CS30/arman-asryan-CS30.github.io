// Puzzle Game
// Arman Asryan
// Apr 17 / 2026

// Global Variables

let shape;
let grid = [
  [],
  [],
  [],
  [],
  []
];

let color = [0,255]
let column; let row;
let tileSize = 100
let clickCount = 0;

function setup() {
  
  setGrid(grid)
  row = grid.length;
  column = grid[0].length;
  createCanvas(column * tileSize, row*tileSize); //Create the canvas after the grid has been populated
  shape = "cross" //Initial shape
  
}

function setGrid(grid) {
  //Populate the each row with either black or white randomly
  for(let row of grid){
    for (let i = 1; i <= 6; i++) {
      row.push(color[Math.round(random(0,1))])
    }
  }
}


function draw() {
  background(250);
  renderGrid()
  overlay()
  if(checkWin()) {
    text("You Won !",width/2, height/2)
  }else{
    text(timer() + "s", width/2+10, height/2)
    text(clickCount, width/2+10, height/2 + 30)

  }
}

function timer() {
  return Math.round(frameCount/60)
}

function checkWin() {
  let first = grid[0][0];

  //Checks every tile and returns false
  //Even if only one of the tiles is different
  //Than the first one
  for (let y = 0; y < row; y++) {
    for (let x = 0; x < column; x++) {
      if (grid[y][x] !== first) {
        return false;
      }
    }
  }

  return true;
}


function overlay() {
  let x = getCurrentX()
  let y = getCurrentY()
  

  if (!keyIsDown(SHIFT)) { //If shift isnt down then draw a cross or a square as overlay
    if (shape === "cross") {
    fill("Green")
    square(x * tileSize,y* tileSize, tileSize)
    square(x * tileSize,(y+1)* tileSize, tileSize)
    square((x-1) * tileSize,y* tileSize, tileSize)
    square(x * tileSize,(y-1)* tileSize, tileSize)
    square((x+1) * tileSize,y* tileSize, tileSize)
  }else{
    fill("Green")
    square(x * tileSize,y* tileSize, tileSize)
    square(x * tileSize,(y-1)* tileSize, tileSize)
    square((x-1) * tileSize,y* tileSize, tileSize)
    square((x-1) * tileSize,(y-1)* tileSize, tileSize)
  }
  }else{ //Draw just one tile if shift is down
    fill("Green")
    square(x * tileSize,y* tileSize, tileSize)
  }
 
}

function flip(x,y) {
  //Check the color of the tile and changes it to the opposite color
  if (grid[y][x] === 0) grid[y][x] = 255
  else grid[y][x] = 0
}

function renderGrid() {
  //Displaying each of the tiles on the screen
  for (let y = 0; y < row; y++) {
    for (let x = 0; x < column; x++) {
      let fillColor = grid[y][x]
        fill(fillColor)
        square(x*tileSize,y*tileSize,tileSize)
      }
    } 
}

function getCurrentX() {
  let constrainedX = constrain(mouseX, 0, width - 1);
  return floor(constrainedX / tileSize);
}

function getCurrentY() {
  let constrainedY = constrain(mouseY, 0, height - 1);
  return floor(constrainedY / tileSize);
}

function mousePressed() {
  clickCount ++
  // Checks if the mouse is within the boundaries of the grid
  if (mouseX<width && mouseY < height && !keyIsDown(SHIFT)) {
    if (shape === "cross") {
      let x = getCurrentX()
      let y = getCurrentY()
    
      flip(x,y)
      //Checks if the position of the mouse is within the index of the array
      if (x-1 >= 0) flip(x-1,y)
      if(y-1 >= 0) flip(x,y-1)
      if(x + 1 <= grid[0].length) flip(x+1,y)
      if(y + 1 <= grid.length) flip(x,y+1)
    }else{
      let x = getCurrentX()
      let y = getCurrentY()
    
      flip(x,y)
      if (x-1 >= 0) flip(x-1,y)
      if(y-1 >= 0) flip(x,y-1)
      if(y-1 >= 0) flip(x-1,y-1)
    }
   
  
  }else{ //Single tile flip (only when shift is held down)
    let x = getCurrentX()
    let y = getCurrentY()
    flip(x,y)
  }

    
}

function keyPressed() {
  //Changes the current shape 
  if (key === " ") {
    if(shape === "cross") shape = "square"
    else shape = "cross"
  }

}