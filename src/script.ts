// selecting our elements
const canvas = document.getElementById("canvas") as any;
const ctx = canvas.getContext("2d");
// our global varibales

let size = 5;
let color = "black";
let x: any;
let y: any;
// our functions
const drawingCircle = (x: any, y: any) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fill();
};

// draw line function

const drawLine = (x1: any, y1: any, x2: any, y2: any) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.stroke();
};

drawingCircle(100, 200);

// our eventlisnters
