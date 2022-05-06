let mouse = [];
let max = 500;

document.onmousemove = function (e) {
  let posX = e.clientX;
  let posY = e.clientY;
  let object = {
    x: posX,
    y: posY,
  };
  if (mouse.length < max) {
    mouse.push(object);
  } else {
    console.log("whoopa");
  }

  //console.log(posX, posY);
  //console.log(mouse);
};

let pointer = document.getElementById("pointer");
pointer.style.position = "fixed";
console.log(pointer);
//-- Animate our collected Data --// Wie Drwa function in p5js
let index = 0;
window.requestAnimationFrame(animate);

function animate() {
  window.requestAnimationFrame(animate);

  // console.log(mouse[index]);
  //console.log(index);
  if (mouse.length > 0) {
    pointer.style.left = mouse[index].x + "px";
    pointer.style.top = mouse[index].y + "px";
  }

  index++;
  if (index >= mouse.length) {
    index = 0;
  }
}
