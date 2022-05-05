let n = 0; /*schlüsselwort let und variablenname. zuweisung des werts von rechts nach links */
let y = 0;
let x = 0;
function buttonPressed() {
  n++;
  document.getElementById("element").style.left = n * 10 + "px";
}

function neuesElement() {
  let div = document.createElement("div");
  div.classList.add("random");
  div.style.left = Math.random() * window.innerWidth + "px";
  div.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(div);
}
function neuesBild() {
  n++;
  x = x + 1;
  let versatzX = 30; /* um wieviel das bild jedesmal nach rechts rückt*/
  let versatzY = 40;

  let myImage = new Image(200, 100);
  myImage.src = "assets/images/people.png";
  myImage.classList.add("bild");
  myImage.style.left = x * versatzX + "px";
  myImage.style.top = y * versatzY + "px";

  /*   myImage.style.left = Math.random() * window.innerWidth + "px";
  myImage.style.top = Math.random() * window.innerHeight + "px"; */
  document.body.appendChild(myImage);
  console.log(x, y);

  if (n % 10 == 0) {
    x = 0;
    y = y + 1;
  }
}
