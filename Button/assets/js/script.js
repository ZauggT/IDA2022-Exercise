let n = 0; /*schlüsselwort let und variablenname. zuweisung des werts von rechts nach links */
function buttonPressed() {
  n++;
  document.getElementById("element").style.left = n * 10 + "px";
}
console.log("hallo von extern");

function neuesElement() {
  let div = document.createElement("div");
  div.classList.add("random");
  div.style.left = Math.random() * window.innerWidth + "px";
  div.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(div);
}
function neuesBild() {
  n++;
  let versatz = 20; /* um wieviel das bild jedesmal nach rechts rückt*/
  let myImage = new Image(200, 100);
  myImage.src = "assets/images/people.png";
  myImage.classList.add("bild");
  /* myImage.style.left = n * versatz + "px"; */
  myImage.style.left = Math.random() * window.innerWidth + "px";
  myImage.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(myImage);
}
