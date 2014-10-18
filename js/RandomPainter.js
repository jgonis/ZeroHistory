/**
 * Created by vgw44765 on 03/10/2014.
 */
window.onload = function (event) {
    var canvas = (document.getElementById("canvas"));
    if (canvas !== null) {
        var canvasParent = canvas.parentElement;
        if (canvasParent !== null) {
            canvas.width = canvasParent.clientWidth;
            canvas.height = canvasParent.clientHeight;
        }
    }
};
//# sourceMappingURL=RandomPainter.js.map