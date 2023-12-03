// selecting our elements
const canvas = document.getElementById("canvas") as any;
const ctx = canvas.getContext("2d");
// our global varibales

let size = 5;
let color = "black";
// our functions
const drawingCircle = (x: any, y: any) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fill();
};

drawingCircle(100, 200);

// our eventlisnters
