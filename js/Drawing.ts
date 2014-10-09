/**
 * Created by vgw44765 on 03/10/2014.
 */
window.onload = canvasResize;
window.onresize = canvasResize;

function canvasResize(event) {
    console.log("Resizing!");
    var canvasContainer = document.getElementById("canvasContainer");
    var footer = document.getElementById("canvasContainer");
    var width = canvasContainer.clientWidth;
    var height = canvasContainer.clientHeight;
    var canvas:HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas");
    canvas.width = width;
    canvas.height = height - 10;
    /*var context: CanvasRenderingContext2D = canvas.getContext('2d');
     context.strokeStyle = "rgb(255, 0, 0)";
     context.lineWidth = 5;
     context.beginPath();
     context.moveTo(0, 0);
     context.lineTo(context.canvas.width - 50, context.canvas.height - 50);
     context.closePath();
     context.stroke();*/
}