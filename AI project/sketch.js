let betaParticles = [];
let source;
let shield;

function setup() {
  createCanvas(600, 400);
  source = createVector(width/2, height/2);
  
  // Shield represented as a rectangle
  shield = {
    x: width/2 + 50,
    y: height/2 - 50,
    w: 20,
    h: 100
  };
}

function draw() {
  background(30);

  // Draw source
  fill(255, 0, 0);
  noStroke();
  ellipse(source.x, source.y, 20, 20);
  fill(255);
  textAlign(CENTER);
  text("Beta Source", source.x, source.y - 20);

  // Draw shield
  fill(100, 255, 100, 150);
  rect(shield.x, shield.y, shield.w, shield.h);
  fill(255);
  text("Shield", shield.x + shield.w/2, shield.y - 10);

  // Emit new beta particles
  if(frameCount % 2 === 0){
    let angle = random(-PI/4, PI/4); // spread
    betaParticles.push(new BetaParticle(source.x, source.y, angle));
  }

  // Update and display particles
  for(let i = betaParticles.length-1; i >= 0; i--){
    betaParticles[i].update();
    betaParticles[i].display();

    // Check for shield collision
    if(betaParticles[i].x > shield.x && betaParticles[i].x < shield.x + shield.w &&
       betaParticles[i].y > shield.y && betaParticles[i].y < shield.y + shield.h){
         betaParticles.splice(i,1); // particle absorbed
       }
    else if(betaParticles[i].x > width || betaParticles[i].y > height || betaParticles[i].x < 0 || betaParticles[i].y < 0){
      betaParticles.splice(i,1); // remove off-screen particles
    }
  }

  // Labels
  fill(255);
  textSize(14);
  text("Visualisation of Beta Radiation", width/2, 20);
}

// ---------------- Beta Particle Class ----------------
class BetaParticle{
  constructor(x, y, angle){
    this.x = x;
    this.y = y;
    this.speed = random(2, 5);
    this.vx = this.speed * cos(angle);
    this.vy = this.speed * sin(angle);
    this.color = color(0, 150, 255);
  }
  
  update(){
    this.x += this.vx;
    this.y += this.vy;
    
    // slight scattering
    this.vx += random(-0.05, 0.05);
    this.vy += random(-0.05, 0.05);
  }
  
  display(){
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, 5, 5);
  }
}