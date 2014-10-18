/**
 * Created by vgw44765 on 03/10/2014.
 */
window.onload = (event) => {
    var canvas:HTMLCanvasElement = <HTMLCanvasElement>(document.getElementById("canvas"));
    if (canvas !== null) {
        var canvasParent = canvas.parentElement;
        if (canvasParent !== null) {
            canvas.width = canvasParent.clientWidth;
            canvas.height = canvasParent.clientHeight;
        }
    }
};

