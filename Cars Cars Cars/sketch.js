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
    let vehicle = new Vehicle(0,0) // create a vehicle at (0,0)
    if (vehicle.direction === "right") {
      //Rewrite the coordinates according to their direction
      vehicle.x = Math.round(random(0,width));
      vehicle.y = Math.round(random(height/2+30,(3*height)/4 - 20));
      eastbounds.push(vehicle)
    }else{
      vehicle.x = Math.round(random(0,width));
      vehicle.y = Math.round(random(height/4+20,height/2 - 30));
      westbounds.push(vehicle)
    }
  }
}

function draw() {
  let light =new TrafficLight(100,100);
  light.display()

  background(220);
  drawRoad()
  for(let vehicle of eastbounds){
    vehicle.action()
  }

  for(let vehicle of westbounds){
    vehicle.action()
  }

}

function drawRoad() {
  fill(0)
  rect(0,height/4,width,height/2)
  
  //Separation of the road
  for (let i = 0; i <= width; i += 50) {
    fill("Yellow")
    rect(i,height/2, 20, 2)
  }
}


class Vehicle{
  constructor(x,y){
    this.x = x; this.y = y;
    this.type = Math.round(random(1,2)); //Random number that determines the type of the car (1 -> Car, 2 -> Truck)
    this.color = [random(255), random(255), random(255)] // Random values of rgb
    this.direction = directions[Math.round(random(0,1))] //Pick a random direction
    this.xSpeed = 5;
  }

  drawCar(){
    noStroke()
    fill(this.color[0], this.color[1], this.color[2]) // random color
    rect(this.x, this.y, 30, 15)
    stroke(0)
    fill(255)

    //Wheels
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
    this.speedUp()
    this.speedDown()
    this.changeColor()
  }

  speedUp(){
    //1 % chance of getting any number
    let diceRoll = Math.round(random(0,100))
    if (diceRoll === 1) {
      if (this.direction === "right") {
        this.xSpeed = constrain(this.xSpeed + random(0,2), 5, 15 ) 
      }else{
        this.xSpeed -= random(0,-2)
      }
    }
    
  }

  speedDown(){
    //1 % chance of getting any number
    let diceRoll = Math.round(random(0,100))
    if (diceRoll === 1) {
      if (this.direction === "right") {
        this.xSpeed = constrain(this.xSpeed+random(0,-2),5,15) 
      }else{
        this.xSpeed = constrain(this.xSpeed + random(0,2), -15,5)
      }
    }
  }

  changeColor(){
    //1 % of getting any number
    let diceRoll = Math.round(random(0,100))
    if (diceRoll === 1) {
      for(let c of this.color){
        c = random(0,255)
      }
    }
    
  }
}

class TrafficLight{
  constructor(x,y){
    this.x = x; this.y = y;
    this.color = "green";
  }

  display(){
      fill("green");
      circle(100,100,200)
      //console.log(true)
    
  }
}
