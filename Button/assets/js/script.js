let n = 0; /*schlüsselwort let und variablenname. zuweisung des werts von rechts nach links */
function buttonPressed() {
  n++;
  document.getElementById("element").style.left = n + "px";
}
console.log("hallo von extern");

function neuesElement() {
  let div = document.createElement("div");
  div.classList.add("random");
  div.style.left = Math.random() * window.innerWidth + "px";
  div.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(div);
}
