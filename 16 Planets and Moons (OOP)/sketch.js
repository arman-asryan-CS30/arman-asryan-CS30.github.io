// Planets and Moons
// Arman Asryan
// Mar 26 / 26


let planets; let stars = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  planets = new Planet(random(0,width),random(0,height))
  for (let i = 0; i < 100; i++) {
    let star = {
      x:random(0,width),
      y: random(0,height),
      s: random(5,10)
    }
    stars.push(star)
  }

}

function draw() {
  background(0,20);
  
  for(let star of stars){
    circle(star.x, star.y, star.s)
  }
  planets.display()
}

function mousePressed() {
  planets.createMoon()
  //regular click -> add moon
  //SHIFT click -> destroy and reset moon
  if (keyIsPressed && keyCode === SHIFT) {
    planets = new Planet(random(0,width), random(0,height))
  }
}

function keyPressed() {
  if (keyCode !== SHIFT) {
    planets.x = mouseX
    planets.y = mouseY
  }
}


class Planet{
  constructor(x,y){
    this.x = x; this.y = y; 
    this.size = 100
    this.moons = []
  }

  //Class methods
  createMoon(){
    this.moons.push(new Moons())
  }

  //Draw Planet with its moons
  display(){
    circle(this.x, this.y , this.size)
    for (let m of this.moons) {
      m.update(this.x,this.y)
    }
  }
}

class Moons{
  constructor(){
    this.speed = random(1,5)
    this.angle = 0;
    this.orbitRadius = random(100,200)
    this.s = random(10,50)
  }

  move(){
    this.angle += this.speed
  }

  display(x,y){
    push()
    translate(x,y)
    rotate(this.angle)
    circle(this.orbitRadius, 0, this.s)
    pop()
  }

  update(x,y){
    //helper method to handle all internal methods
    this.move()
    this.display(x,y)
  
  }
}
