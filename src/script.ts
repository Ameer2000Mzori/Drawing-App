// selecting our elements
const canvas = document.getElementById("canvas") as any;
const ctx = canvas.getContext("2d");
// our global varibales

let size = 20;

// our functions
const drawingCircle = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true);
};

// our eventlisnters
