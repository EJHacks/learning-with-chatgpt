let circleX, circleY;
let baseRadius = 50;
let score = 0;

function setup() {
  createCanvas(600, 400);
  textFont('Arial');
  circleX = width / 2;
  circleY = height / 2;
}

function draw() {
  background(230);

  // Calculate distance from mouse to circle
  let d = dist(mouseX, mouseY, circleX, circleY);

  // Visual line between mouse and circle
  stroke(100);
  line(mouseX, mouseY, circleX, circleY);

  // Size and color change with distance
  let size = map(d, 0, width, 100, 30);
  let redColor = map(d, 0, width, 255, 0);
  let blueColor = map(d, 0, width, 0, 255);

  noStroke();
  fill(redColor, 100, blueColor);
  circle(circleX, circleY, size * 2);

  // Inside circle message
  fill(0);
  textAlign(CENTER);
  textSize(18);
  if (d < size) {
    text("You're inside the circle!", width / 2, 40);
  } else {
    text("Try to get closer!", width / 2, 40);
  }

  // Distance display
  textSize(14);
  text("Distance: " + d.toFixed(2), width / 2, height - 40);

  // Score display
  textAlign(LEFT);
  textSize(16);
  text("Score: " + score, 20, 30);
}

// Click to move the circle if you're close enough
function mousePressed() {
  let d = dist(mouseX, mouseY, circleX, circleY);
  if (d < baseRadius * 1.5) {
    score++;
    circleX = random(50, width - 50);
    circleY = random(50, height - 50);
  }
}
