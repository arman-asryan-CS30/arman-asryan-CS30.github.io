// Puzzle Game
// Arman Asryan
// Apr 17 / 2026



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

function setup() {
  
  setGrid(grid)
  row = grid.length;
  column = grid[0].length;
  createCanvas(column * tileSize, row*tileSize);
}

function setGrid(grid) {
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
}

function overlay() {
  let x = getCurrentX()
  let y = getCurrentY()

 
 
}

function flip(x,y) {
  if (grid[y][x] === 0) grid[y][x] = 255
  else grid[y][x] = 0
}

function renderGrid() {
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
  if (mouseX<width && mouseY < height && !keyIsDown(SHIFT)) {

    let x = getCurrentX()
    let y = getCurrentY()
    
    flip(x,y)
    if (x-1 >= 0) flip(x-1,y)
    if(y-1 >= 0) flip(x,y-1)
    if(x + 1 <= grid[0].length) flip(x+1,y)
    if(y + 1 <= grid.length) flip(x,y+1)
  
  }else{
    let x = getCurrentX()
    let y = getCurrentY()
    flip(x,y)
  }
}