/**
 * Created by vgw44765 on 03/10/2014.
 */
window.onload = function (event) {
    var canvas = <HTMLCanvasElement>(document.getElementById("canvas"));
    if (canvas !== null) {
        var canvasParent = canvas.parentElement;
        if (canvasParent !== null) {
            canvas.width = canvasParent.clientWidth;
            canvas.height = canvasParent.clientHeight;
        }
    }
};

function loopingFunc() {
    var startTime: number = performance.now();
    var iterationCount: number = 0;
    var currentTime: number = 0;
    var shouldLoop: boolean = true;
    while(shouldLoop === true && this.continueProcessing === true) {
        currentTime = performance.now();
        if(currentTime - startTime >= 1000) {
            this.postMessageFunc(iterationCount);
            shouldLoop = false;
        }
        iterationCount = iterationCount + 1;
    }
    self.setTimeout(this.loopingFunc, 0);
}