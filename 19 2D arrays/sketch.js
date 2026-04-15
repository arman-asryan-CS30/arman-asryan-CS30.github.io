// 2D arrays
//Arman 
//Apr 15/26

// 0 (black)      255 (white)
//grid is 6 x 5

let grid = [
  [0,   0,   0,   255, 0, 255],
  [255, 0,   255, 0,   255, 0],
  [0,   0,   0,   0,   0, 255],
  [255, 255, 255, 255, 255, 0],
  [0,   255, 0,   0,   0, 255]
];

let row = grid.length;
let column = grid[0].length;
let tileSize = 60

function setup() {
  createCanvas(column * tileSize, row*tileSize);

}

function draw() {
  background(250);
  renderGrid()
  text(getCurrentX() + "," + getCurrentY(),width/2, height/2,)
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
        square(x*tileSize,y*tileSize,60)
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
  flip(getCurrentX(),getCurrentY())
}
