// selecting our elements
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// our global varibales
var size = 20;
// our functions
var drawingCircle = function (x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, true);
};
// our eventlisnters
