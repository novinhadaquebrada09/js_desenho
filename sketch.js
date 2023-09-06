function setup() {
  createCanvas(900, 900);
  background("white")
}

function draw() {
  stroke("pink");
  fill("cyan");
  
  
  
  if(mouseIsPressed) {
    rect(mouseX, mouseY, 20, 20, 20);
  }
}