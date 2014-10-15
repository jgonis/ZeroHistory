/**
 * Created by vgw44765 on 03/10/2014.
 */
window.onload = canvasSetup;
function draw(context, width, height) {
    if (context != null) {
        context.lineWidth = 5;
        context.strokeStyle = "rgb(255, 0, 0)";
        context.moveTo(0, height / 2);
        context.lineTo(100, height / 2);
        context.moveTo(width / 2, 0);
        context.lineTo(width / 2, 100);
        context.stroke();
    }
}
function canvasResize(event) {
    var canvas = (document.getElementById("canvas"));
    var controlsOnLeft = document.getElementById("controls");
    var controlsOnLeftWidth = controlsOnLeft.clientWidth;
    var controlsBelow = document.getElementById("bottom");
    var controlsBelowHeight = controlsBelow.clientHeight;
    if (canvas != null) {
        var canvasParent = canvas.parentElement;
        if (canvasParent != null) {
            canvas.width = canvasParent.clientWidth; // - (controlsOnLeftWidth);
            canvas.height = canvasParent.clientHeight; // - (controlsBelowHeight);
        }
    }
}
function canvasSetup(event) {
    var canvas = (document.getElementById("canvas"));
    canvasResize(null);
    if (canvas != null) {
        var context = canvas.getContext("2d");
        draw(context, canvas.width, canvas.height);
    }
    //window.onresize = canvasResize;
}
//# sourceMappingURL=RandomPainter.js.map