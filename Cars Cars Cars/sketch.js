// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let directions = ["left","right"]
let eastbounds = [];
let westbounds = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 50; i++) {
    let vehicle = new Vehicle(0,0)
    if (vehicle.direction === "right") {
      vehicle.x = Math.round(random(0,width));
      vehicle.y = Math.round(random(height/2+30,(3*height)/4 - 20));
      eastbounds.push(vehicle)
    }else{
      vehicle.x = Math.round(random(0,width));
      vehicle.y = Math.round(random(height/4+20,height/2 - 30));
      westbounds.push(vehicle)
    }
  }

  //console.log(vehicles)
  console.log(eastbounds)
  console.log(westbounds)
}

function draw() {
  background(220);
  drawRoad()
  for(let vehicle of eastbounds){
    vehicle.action()
    vehicle.speedUp()
    vehicle.speedDown()
    vehicle.changeColor()
  }

  for(let vehicle of westbounds){
    vehicle.action()
    vehicle.speedUp()
    vehicle.speedDown()
    vehicle.changeColor()
  }

}

function drawRoad() {
  fill(0)
  rect(0,height/4,width,height/2)
  for (let i = 0; i <= width; i += 50) {
    fill("Yellow")
    rect(i,height/2, 20, 2)
  }
}


class Vehicle{
  constructor(x,y){
    this.x = x; this.y = y;
    this.type = Math.round(random(1,2));
    this.color = [random(255), random(255), random(255)]
    this.direction = directions[Math.round(random(0,1))]
    this.xSpeed = 5;
  }

  drawCar(){
    noStroke()
    fill(this.color[0], this.color[1], this.color[2])
    rect(this.x, this.y, 30, 15)
    stroke(0)
    fill(255)
    rect(this.x,this.y-2, 8,2)
    rect(this.x,this.y+17, 8,2)
    rect(this.x+22,this.y-2, 8,2)
    rect(this.x+22,this.y+17, 8,2)
  }

  drawTruck(){
    if (this.direction === "right") {
      stroke(0)
      fill(this.color[0], this.color[1], this.color[2])
      rect(this.x, this.y, 30, 15)
      stroke(0)
      rect(this.x + 30, this.y, 10, 15)
    }

    //Changes the shape of the truck based on the direction
    if (this.direction === "left") {
      stroke(0)
      fill(this.color[0], this.color[1], this.color[2])
      rect(this.x, this.y, 30, 15)
      stroke(0)
      rect(this.x, this.y, 10, 15)
    }
    
  }

  display(){
    if (this.type === 1) {
      this.drawCar()
    }else{
      this.drawTruck()
    }
  }

  

  move(){
    //Eastbound
    if (this.direction === "right") {
      this.x += this.xSpeed
    }
    if (this.x > width) {
      this.x = 0
    }

    //Westbound
    if (this.direction === "left") {
      this.x -= this.xSpeed
    }
    if (this.x < 0) {
      this.x = width - 30
    }
  }

  action(){
    this.display()
    this.move()
  }

  speedUp(){
    let diceRoll = Math.round(random(0,100))
    console.log(diceRoll)
    if (diceRoll === 1) {
      if (this.direction === "right") {
        this.xSpeed += random(0,2)
      }else{
        this.xSpeed -= random(0,-2)
      }
    }
    
  }

  speedDown(){
    let diceRoll = Math.round(random(0,100))
    //console.log(diceRoll)
    if (diceRoll === 1) {
      if (this.direction === "right") {
        this.xSpeed += random(0,-2)
      }else{
        this.xSpeed -= random(0,2)
      }
    }
  }

  changeColor(){
    let diceRoll = Math.round(random(0,100))
    if (diceRoll === 1) {
      for(let c of this.color){
        c = random(0,255)
      }
    }
    
  }
}
