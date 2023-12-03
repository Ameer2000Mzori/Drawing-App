// selecting our elements
const canvas = document.getElementById("canvas") as any;
const ctx = canvas.getContext("2d");
const colorEl = document.getElementById("color") as any;
const decreaseEL = document.getElementById("decrease") as any;
const increaseEl = document.getElementById("increase") as any;
const sizeEl = document.getElementById("size") as any;
const clearEl = document.getElementById("clear") as any;

// our global varibales

let size = 5;
let color = "black";
let x: any;
let y: any;
let isPressed: boolean;

// our functions

// drawing circle function
const drawingCircle = (x: any, y: any): void => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fill();
};

// draw line function

const drawLine = (x1: any, y1: any, x2: any, y2: any): void => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};

// our mouse down function
canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
  console.log(isPressed, x, y);
});

// our mouse up function

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
  console.log(isPressed, x, y);
});

// our mouse move function
canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    console.log(x2, y2);

    drawingCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

// our color function
colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});

// our eventlisnters
