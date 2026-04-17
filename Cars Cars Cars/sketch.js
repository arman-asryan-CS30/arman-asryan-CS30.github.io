// Cars Cars Cars
// Arman Asryan
// Mar 26 / 2026


//Global variables 

let directions = ["left","right"]
let eastbounds = [];
let westbounds = [];

let light;//Traffic Light

//Keeping track of time
let starting; let current;
let elapsed;

function setup() {
  starting = frameCount;
  

  createCanvas(windowWidth, windowHeight);
  //Fill out the eastbound and westbound with cars
  for (let i = 0; i < 10; i++) {
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

  //Traffic Light
  light = new TrafficLight(100,100)
}

function draw() {
  background(220);
  //Track the frame Counts
  current = frameCount;
  elapsed = abs(starting - current)



  fill(light.color)
  circle(light.x,light.y,100)
  if (elapsed > 120) {
    //Change the color to green
    light.color = "Green"
    
    //Start moving again
    for(let car of eastbounds){
      car.moving = true;
    }

    //Start moving again
    for(let car of westbounds){
      car.moving = true;
    }
  }
  
  drawRoad()
  
  //Rendering vehicle that go from righ to left
  for(let vehicle of eastbounds){
    vehicle.action()
  }

  //Rendering vehicles from right to left
  for(let vehicle of westbounds){
    vehicle.action()
  }

}

function mousePressed() {
  
  //Create a new vehicle with direction "right" after every left click
  if (mouseButton === LEFT && !keyIsDown(SHIFT)) {
    let vehicle = new Vehicle(0,0)
    vehicle.x = Math.round(random(0,width));
    vehicle.y = Math.round(random(height/2+30,(3*height)/4 - 20));
    vehicle.direction = "right"
    eastbounds.push(vehicle)
  }
  
  if (mouseButton === LEFT && keyIsDown(SHIFT)) {
    let vehicle = new Vehicle(0,0)
    vehicle.x = Math.round(random(0,width));
    vehicle.y = Math.round(random(height/4+20,height/2 - 30));
    vehicle.direction = "left"
    westbounds.push(vehicle)
  }
}

function keyPressed() {
  if (key === " ") {
    light.color = "Red" 
    
    //Stop th movement of the cars
    for(let car of eastbounds){
      car.moving = false;
    }

    //Stop the movement of the cars
    for(let car of westbounds){
      car.moving = false;
    }
    
    //Restart the counting
    starting = frameCount;
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
    this.type = Math.round(random(0,1)); //Random number that determines the type of the car (0 -> Car, 1 -> Truck)
    this.color = [random(255), random(255), random(255)] // Random values of rgb
    this.direction = directions[Math.round(random(0,1))] //Pick a random direction
    this.xSpeed = 5; //Default speed
    this.moving = true; //Changes depending on the Traffic Light
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
    if (this.type === 0) {
      this.drawCar()
    }else{
      this.drawTruck()
    }
  }

  

  move(){
    //Eastbound
    if (this.direction === "right" && this.moving) {
      this.x += this.xSpeed
    }
    if (this.x > width) {
      this.x = 0
    }

    //Westbound
    if (this.direction === "left" && this.moving) {
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
      //for eastbound cars decrease the xSpeed
      if (this.direction === "right") {
        this.xSpeed = constrain(this.xSpeed+random(0,-2),5,15) 
      }else{ // for westbound cars increase the xSpeed 
        this.xSpeed = constrain(this.xSpeed + random(0,2), -15,5)
      }
    }
  }

  changeColor(){
    //1 % of getting any number
    let diceRoll = Math.round(random(0,100))
    if (diceRoll === 1) {
    //Change values of rgb
    this.color[0] = random(255)
    this.color[1] = random(255)
    this.color[2] = random(255)
    }
    
  }
}


class TrafficLight{
  constructor(x,y){
    this.x = x; this.y = y;
    this.color = "Green"
  }
}

