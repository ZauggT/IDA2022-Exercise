console.log("hello World");

let number = 9;

let array = [12, 4, 72, 2, 33, 21, 7, 93, 3, 44, 52];

console.log(array);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

let array2 = [];
let num_items = 50;
for (let i = 0; i < num_items; i++) {
  let randomVal = Math.random() * 1000;
  array2.push(randomVal);
}
console.log(array2);

let object = {
  x: 100,
  y: 200,
  width: 100,
  height: 300,
};

let div = document.createElement("div");
div.style.position = "fixed";
div.style.width = object.width + "px";
div.style.height = object.height + "px";
div.style.top = object.y + "px";
div.style.left = object.x + "px";
div.style.backgroundColor = "#f33";

document.body.appendChild(div);
console.log(object);
