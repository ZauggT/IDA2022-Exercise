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
  /*   background(2, 204, 123, 10);
  fill(random(255), random(255), random(255));
  ellipse(mouseX, mouseY, random(1, 20));
  line(width / 2, height / 2, mouseX, mouseY); */

  background(0, 100);
  fill(random(255), random(255), random(255));
  /*   textSize(map(history[count].visitCount, 1, 100, 8, 50));
  text(history[count].title, width / 2, height / 2);
  count++;
  if (count > Object.keys(history).length) {
    count = 0;
  } */
  let start = 0;
  let zeile = 20; /* Versatz in der y Achse, soviel rutscht jeder Eintrag gegen unten*/
  let step = 2; /* Um soviel Pixel wird der nächste Eintrag grösser */
  let portion = 50;
  for (let i = start; i < portion + start; i++) {
    textSize((i - start) * step);
    text(history[i].title, width / 2, (i - start - 1) * zeile);
  }
}

function keyReleased() {
  if (key == "s" || key == "S") {
    let d = new Date();
    let now =
      d.getFullYear() +
      "" +
      (d.getMonth() + 1) +
      "" +
      d.getDate() +
      "" +
      (d.getHours() + 1) +
      "-" +
      (d.getMinutes() + 1) +
      "" +
      (d.getSeconds() + 1) +
      "-" +
      frameCount;
    saveCanvas(now, "png");
  }
}
