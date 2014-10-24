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
function loopingFunc() {
    var startTime = performance.now();
    var iterationCount = 0;
    var currentTime = 0;
    var shouldLoop = true;
    while (shouldLoop === true && this.continueProcessing === true) {
        currentTime = performance.now();
        if (currentTime - startTime >= 1000) {
            this.postMessageFunc(iterationCount);
            shouldLoop = false;
        }
        iterationCount = iterationCount + 1;
    }
    self.setTimeout(this.loopingFunc, 0);
}
//# sourceMappingURL=RandomPainter.js.map