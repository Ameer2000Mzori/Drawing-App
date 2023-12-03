// selecting our elements
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// our global varibales
var size = 5;
var color = "black";
// our functions
var drawingCircle = function (x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, true);
    ctx.fillStyle = color;
    ctx.fill();
};
drawingCircle(100, 200);
// our eventlisnters
