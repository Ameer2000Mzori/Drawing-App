// selecting our elements
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// our global varibales
var size = 5;
var color = "black";
var x;
var y;
var isPressed;
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
    ctx.lineWidth = size * 2;
    ctx.stroke();
};
// our mouse down function
canvas.addEventListener("mousedown", function (e) {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
    console.log(isPressed, x, y);
});
// our mouse up function
canvas.addEventListener("mouseup", function (e) {
    isPressed = false;
    x = undefined;
    y = undefined;
    console.log(isPressed, x, y);
});
// our mouse move function
canvas.addEventListener("mousemove", function (e) {
    if (isPressed) {
        var x2 = e.offsetX;
        var y2 = e.offsetY;
        console.log(x2, y2);
        drawingCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});
drawingCircle(100, 200);
// our eventlisnters
