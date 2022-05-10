let history;
let count = 0;

function preload() {
  history = loadJSON("chrome_history.json");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  console.log(history[0].title);
  frameRate(1);
}

function draw() {
  background(2, 204, 123, 10);
  fill(random(255), random(255), random(255));
  ellipse(mouseX, mouseY, random(1, 20));
  line(width / 2, height / 2, mouseX, mouseY);

  background(0);
  text(history[count].title, width / 2, height / 2);
  count++;
  if (count > Object.keys(history).length) {
    count = 0;
  }
}

function mouseClicked() {
  clear();
  redraw();
}
