// Maps and Files
// Arman Asryan
// Apr 21/ 2026


let textFile;
let imgFile,rows,cols,colorMap;


function preload() {
  textFile = loadStrings("./assets/info.txt")
  imgFile = loadStrings("./assets/image.txt")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // loadAssets()
  noLoop()

  //Determine # of rows and cols
  rows = imgFile.length
  cols = imgFile[0].length

  //Construct the Map color
  colorMap = new Map([
    ["b", "black"],
    ["w", color(255)],
    ["r", "red"],
    ["p", "purple"],
    ["l", "brown"]
  ])
}

function drawImage() {
  // read through our text info and
  //construct an image.

  let pixelSize = 50;
  for (let y = 0; y < rows; y++){
    let currentRow = imgFile[y]
    print(currentRow);
    for (let x = 0; x < cols; x++) {
      let currentKey = currentRow[x]
      fill(colorMap.get(currentKey))
      square(x*pixelSize, y*pixelSize, pixelSize)
    }
  }
}

function draw(){
  background(220);
  drawImage();
 // processText();
}

function processText() {
  //3 different ways to split up
  // larger strings into words, or charcters
  // split() and ... spread syntax
  print("SPLIT INTO WORDS")
  let splitWords = textFile[0].split(" ")
  print(splitWords);

  print("SPLIT INTO CHARACTERS");
  let splitChars = textFile[1].split("");
  print(splitChars)

  print("SPREAD INTO CHARACTERS")
  let spreadChars = [...textFile[2]]
  print(spreadChars)
}
