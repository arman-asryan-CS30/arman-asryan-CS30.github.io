// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//Global variables
let items = [];
let provinces = new Map();
let currentProv = "SK";

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i <= 20; i++) {
    items.push({
      x:Math.round(random(0, width)),
      y:Math.round(random(0, height)),
      speedY: Math.round(random(1,3)),
      name: "Item " + (i+1),
      basePrice: Math.round(random(1,100))
    })    
  }
  provinces.set("SK", {tax: 1.11})
  provinces.set("AB", {tax: 1.05})
  provinces.set("ON", {tax: 1.13})
}

function keyPressed() {
  if (key === "1") {
    currentProv = "SK"
  }
  else if (key === "2") {
    currentProv = "AB"
  }
  else if (key === "3") {
    currentProv = "ON"
  }

  //Inventory Clear extension
  else if(key === "x"){
    items.splice(0,1)
  }
}

function draw() {
  background(220);
  let rules = provinces.get(currentProv);

  for (let item of items) {
    item.y += item.speedY
    if (item.y >= height) {
      item.y = 0
    }
    rect(item.x, item.y,60,40)
    text(item.name, item.x+13, item.y+15)

    //Sales extenstion 
    if (!keyIsDown(83)) {
      text(Math.round(item.basePrice*rules.tax) + "$", item.x+20, item.y+30)
    }else{
      text(Math.round((item.basePrice/2)*rules.tax) + "$", item.x+20, item.y+30)
    }
  }
}
