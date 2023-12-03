// selecting our elements
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// our global varibales
var size = 5;
var color = "black";
var x;
var y;
// our functions
var drawingCircle = function (x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, true);
    ctx.fillStyle = color;
    ctx.fill();
};
// draw line function
var drawLine = function (x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();
};
// our mouse down function
canvas.addEventListener("mousedown", function (e) {
    var isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
    console.log(isPressed, x, y);
});
// here is our mouse up function
drawingCircle(100, 200);
// our eventlisnters
